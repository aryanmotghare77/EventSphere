'use es6';

import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["customerPortalId", "portalId"],
    _excluded2 = ["pageUrl", "isHubspot", "hublet", "clientLoadOnly"];
import getHubletSuffix from '../utils/getHubletSuffix';
import * as MessageChannels from 'feedback-schema/constants/messageChannels';
import * as MessageTypes from 'feedback-schema/constants/messageTypes';
import * as Env from '../utils/environment';
import get from '../utils/http/get';
import {
    getIgnoredSurveys
} from '../utils/ignoreSurvey';
import {
    parentSender
} from 'feedback-utils/messages';
import {
    parentListener
} from 'feedback-utils/subscriptions/messages';
import {
    toQueryParams
} from 'feedback-utils/urls';
let hublet;
let baseParams;
let envIsHubspot;
let loadClientOnly;
const QA_SUFFIX = Env.isQa ? 'qa' : '';
const BASE_FEEDBACK_URL = `hubapi${QA_SUFFIX}.com/feedback`;
const BASE_FEEDBACK_AUTH_URL = `hubspot${QA_SUFFIX}.com/feedback`;
const send = parentSender(MessageChannels.FETCHER);

// fifo of urls we've visited
const backlog = [];
let currentRequest;
const getSurveyExclusionParams = () => {
    const ignored = getIgnoredSurveys(baseParams.portalId);
    return Object.keys(ignored).reduce((acc, surveyType) => Object.assign({}, acc, {
        [`excludedIds.${surveyType}`]: ignored[surveyType]
    }), {});
};
const handleSurveyConfig = payload => {
    currentRequest = false;
    // eslint-disable-next-line no-use-before-define
    maybeMakeRequest();
    if (!payload.config) return;
    send(MessageTypes.SURVEY_FETCHED, payload);
};
const handleLoadedConfig = payload => {
    if (!payload.config) return;
    send(MessageTypes.SURVEY_FETCHED, payload);
};
const handleConfigFetched = payload => {
    if (!payload.config) return;
    const {
        portalId
    } = baseParams;
    send(MessageTypes.CONFIG_FETCHED, Object.assign({}, payload, {
        config: Object.assign({}, payload.config, {
            portalId
        })
    }));
};
const getCookie = cookies => {
    const csrfExpression = /csrf.app=([^;]+);?/;
    const csrfResult = csrfExpression.exec(cookies);
    return csrfResult && csrfResult[1];
};
const fetchSurvey = (surveyType, surveyId, callback = () => {}) => {
    currentRequest = true;
    const {
        customerPortalId,
        portalId
    } = baseParams,
    otherParams = _objectWithoutPropertiesLoose(baseParams, _excluded);
    const params = Object.assign({}, otherParams, {
        bundleVersion: Env.bundleVersion,
        portalId: customerPortalId || portalId
    });
    const csrfCookie = getCookie(window.document.cookie);
    const suffix = getHubletSuffix(hublet);
    const BASE_AUTH_URL = `https://api${suffix}.${BASE_FEEDBACK_AUTH_URL}/v1`;
    get(`${BASE_AUTH_URL}/survey-config/${surveyType}/${surveyId}?${toQueryParams(params)}`, callback, {
        headers: {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Content-type': 'application/json',
            'X-HubSpot-CSRF-hubspotapi': csrfCookie
        },
        withCredentials: true
    });
};
const maybeMakeRequest = () => {
    if (!baseParams.portalId) return;
    if (envIsHubspot && loadClientOnly) return;
    if (currentRequest || backlog.length === 0) return;
    currentRequest = true;
    const url = backlog.shift();
    const ignoredParams = getSurveyExclusionParams();
    const params = Object.assign({}, baseParams, {
        bundleVersion: Env.bundleVersion,
        currentUrl: url,
        pageUrl: url
    }, ignoredParams);
    if (!params.portalId) return;
    let headers = {
        'X-HS-Referer': url
    };
    if (envIsHubspot) {
        const csrfCookie = getCookie(window.document.cookie);
        headers = Object.assign({}, headers, {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Content-type': 'application/json',
            'X-HubSpot-CSRF-hubspotapi': csrfCookie
        });
    }
    const suffix = getHubletSuffix(hublet);
    const AUTH_URL = `https://api${suffix}.${BASE_FEEDBACK_AUTH_URL}/v1/survey-config/web`;
    const PUBLIC_URL = `https://feedback${suffix}.${BASE_FEEDBACK_URL}/public/v1/web-config`;
    const targetUrl = envIsHubspot ? AUTH_URL : PUBLIC_URL;
    get(`${targetUrl}?${toQueryParams(params)}`, handleSurveyConfig, {
        headers,
        withCredentials: envIsHubspot
    });
};
const listener = (messageType, payload) => {
    switch (messageType) {
        case MessageTypes.SETUP:
            {
                const {
                    pageUrl,
                    isHubspot,
                    hublet: hub,
                    clientLoadOnly
                } = payload,
                rest = _objectWithoutPropertiesLoose(payload, _excluded2);
                backlog.push(pageUrl);
                hublet = hub;
                baseParams = rest;
                envIsHubspot = isHubspot;
                loadClientOnly = clientLoadOnly;
                break;
            }
        case MessageTypes.LOAD_CONFIG_ONLY:
            {
                const {
                    surveyType,
                    surveyId
                } = payload;
                fetchSurvey(surveyType, surveyId, handleConfigFetched);
                break;
            }
        case MessageTypes.LOCATION_CHANGE:
            {
                backlog.push(payload);
                break;
            }
        case MessageTypes.LOAD_SURVEY:
            {
                const {
                    surveyType,
                    surveyId
                } = payload;
                fetchSurvey(surveyType, surveyId, handleSurveyConfig);
                break;
            }
        case MessageTypes.SHOW_LOADED_CONFIG:
            {
                handleLoadedConfig(payload);
                break;
            }
        default:
            break;
    }
    maybeMakeRequest();
};
parentListener(MessageChannels.FETCHER)(listener);
send(MessageTypes.READY);