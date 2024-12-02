'use es6';

import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}

function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
import * as SurveyTypes from 'feedback-schema/constants/surveyTypes';
import {
    SINGLE,
    INFINITE,
    INFINITE_WITH_BACKOFF,
    MULTIPLE_WITH_BACKOFF
} from 'feedback-schema/constants/surveyFrequencyTypes';
import * as BackoffTimeUnits from 'feedback-schema/constants/surveyProperties/backoffTimeUnits';
export const SURVEY_IGNORE_TIMEOUT_DAYS = 14;
const PREFIX = 'FEEDBACK_IGNORED';
const SEPARATOR = '&';
const keyIsInDate = key => {
    let item;
    try {
        item = localStorage.getItem(key);
    } catch (err) {
        console.error(err);
    }
    if (!item) return false;
    if (new Date(item) > new Date()) {
        return true;
    }
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.error(err);
    }
    return false;
};

// clear expired keys on startup
Object.keys(localStorage || {}).forEach(key => {
    if (key.indexOf(PREFIX) === 0) {
        keyIsInDate(key);
    }
});
export const isSurveyIgnored = (surveyType, surveyId, portalId, surveyFrequencyType) => {
    const key = [PREFIX, surveyType, surveyId, portalId].join(SEPARATOR);
    return surveyFrequencyType !== INFINITE && keyIsInDate(key);
};
export const getCoolOffInDays = (backoff, backoffTimeUnit) => {
    switch (backoffTimeUnit) {
        case BackoffTimeUnits.MONTHS:
            return SURVEY_IGNORE_TIMEOUT_DAYS;
        case BackoffTimeUnits.WEEKS:
            return backoff === 1 ? 7 : SURVEY_IGNORE_TIMEOUT_DAYS;
        case BackoffTimeUnits.DAYS:
        default:
            return backoff;
    }
};
export const ignoreSurvey = (surveyType, surveyId, portalId, surveyFrequencyType = SINGLE, backoff = SURVEY_IGNORE_TIMEOUT_DAYS, backoffTimeUnit = BackoffTimeUnits.DAYS, isPreview, isTest) => {
    if (isTest || isPreview) {
        return;
    }
    const key = [PREFIX, surveyType, surveyId, portalId].join(SEPARATOR);
    if (surveyFrequencyType !== INFINITE) {
        const now = new Date();
        const coolOffInDays = surveyFrequencyType === INFINITE_WITH_BACKOFF || surveyFrequencyType === MULTIPLE_WITH_BACKOFF ? getCoolOffInDays(backoff, backoffTimeUnit) : SURVEY_IGNORE_TIMEOUT_DAYS;
        const expiry = new Date(now.getTime() + coolOffInDays * 24 * 60 * 60 * 1000);
        try {
            localStorage.setItem(key, expiry.toISOString());
        } catch (err) {
            console.error(err);
        }
    }
};
export const handleIgnoreSurvey = ({
    surveyType,
    surveyId,
    portalId,
    surveyFrequencyType = SINGLE,
    backoff = SURVEY_IGNORE_TIMEOUT_DAYS,
    backoffTimeUnit = BackoffTimeUnits.DAYS,
    isPreview,
    isTest
}) => {
    if (isTest || isPreview) {
        return;
    }
    const key = [PREFIX, surveyType, surveyId, portalId].join(SEPARATOR);
    if (surveyFrequencyType !== INFINITE) {
        const now = new Date();
        const coolOffInDays = surveyFrequencyType === INFINITE_WITH_BACKOFF || surveyFrequencyType === MULTIPLE_WITH_BACKOFF ? getCoolOffInDays(backoff, backoffTimeUnit) : SURVEY_IGNORE_TIMEOUT_DAYS;
        const expiry = new Date(now.getTime() + coolOffInDays * 24 * 60 * 60 * 1000);
        try {
            localStorage.setItem(key, expiry.toISOString());
        } catch (err) {
            console.error(err);
        }
    }
};
const ignoredSurveyRegex = portalId => new RegExp(`FEEDBACK_IGNORED&(CSAT|NPS)&(\\d+)&${portalId}`);
export const getIgnoredSurveys = portalId => {
    const regex = ignoredSurveyRegex(portalId);
    return Object.keys(localStorage || {}).reduce((accumulator, key) => {
        const match = key.match(regex);
        if (match === null) return accumulator;
        const id = parseInt(match[2], 10);
        const surveyType = match[1];
        if (!isSurveyIgnored(surveyType, id, portalId)) return accumulator;
        const {
            [surveyType]: ids
        } = accumulator,
        rest = _objectWithoutPropertiesLoose(accumulator, [surveyType].map(_toPropertyKey));
        return Object.assign({}, rest, {
            [surveyType]: [...ids, id].sort()
        });
    }, {
        [SurveyTypes.CSAT]: [],
        [SurveyTypes.NPS]: []
    });
};