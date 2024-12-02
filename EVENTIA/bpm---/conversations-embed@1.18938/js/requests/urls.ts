"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCMSRequestUrl = getCMSRequestUrl;
exports.getInternalRequestUrl = getInternalRequestUrl;
exports.getPublicRequestUrl = getPublicRequestUrl;
exports.getPublicRequestUrlForMobileSDK = getPublicRequestUrlForMobileSDK;
var _hubspotUrlUtils = require("hubspot-url-utils");
var _legacyHubspotBenderContext = require("legacy-hubspot-bender-context");
var _getChatflowTagFromQueryParams = require("../utils/getChatflowTagFromQueryParams");
var _getPortalIdFromPath = require("../utils/getPortalIdFromPath");
var _whichDevice = require("../utils/whichDevice");
//@ts-expect-error untyped-file

function getInternalRequestUrl({
  messagesEnv,
  portalId,
  messagesUtk,
  messagesHublet
}) {
  const usersPortalId = (0, _getPortalIdFromPath.getPortalIdFromPath)(window.location.pathname);
  return `${(0, _hubspotUrlUtils.getFullUrl)('api', {
    envOverride: messagesEnv,
    hubletOverride: messagesHublet
  })}/livechat/v1/message/public/hubspot-app?portalId=${usersPortalId}&mobile=${(0, _whichDevice.isAnyMobile)()}&embeddedPortalId=${portalId}&traceId=${messagesUtk}`;
}
function buildRequestParams({
  messagesUtk,
  hubspotUtk,
  portalId,
  referrer,
  hstc,
  hssc,
  email,
  identificationToken
}) {
  let requestUrl = `?portalId=${portalId}&${_legacyHubspotBenderContext.bender.project}=${_legacyHubspotBenderContext.bender.depVersions[_legacyHubspotBenderContext.bender.project]}&mobile=${(0, _whichDevice.isAnyMobile)()}`;
  if (messagesUtk) {
    requestUrl = `${requestUrl}&messagesUtk=${messagesUtk}&traceId=${messagesUtk}`;
  }
  if (hubspotUtk) {
    requestUrl = `${requestUrl}&hubspotUtk=${hubspotUtk}`;
  }
  if (hstc) {
    requestUrl = `${requestUrl}&__hstc=${hstc}`;
  }
  if (hssc) {
    requestUrl = `${requestUrl}&__hssc=${hssc}`;
  }
  if (referrer) {
    requestUrl = `${requestUrl}&referrer=${referrer}`;
  }
  if (identificationToken) {
    requestUrl = `${requestUrl}&identificationToken=${identificationToken}`;
  }
  if (email) {
    requestUrl = `${requestUrl}&email=${email}`;
  }
  return requestUrl;
}
function getCMSRequestUrl({
  messagesUtk,
  hubspotUtk,
  portalId,
  referrer,
  hstc,
  hssc,
  email,
  identificationToken
}) {
  const requestParams = buildRequestParams({
    messagesUtk,
    hubspotUtk,
    portalId,
    referrer,
    hstc,
    hssc,
    email,
    identificationToken
  });
  return `/_hcms/livechat/widget${requestParams}`;
}
function getPublicRequestUrl({
  messagesHublet,
  messagesEnv,
  messagesUtk,
  hubspotUtk,
  portalId,
  referrer,
  hstc,
  hssc,
  email,
  identificationToken
}) {
  const domain = (0, _hubspotUrlUtils.getFullUrl)('api', {
    envOverride: messagesEnv,
    hubletOverride: messagesHublet
  });
  const requestParams = buildRequestParams({
    messagesUtk,
    hubspotUtk,
    portalId,
    referrer,
    hstc,
    hssc,
    email,
    identificationToken
  });
  return `${domain}/livechat-public/v1/message/public${requestParams}`;
}
function getPublicRequestUrlForMobileSDK({
  messagesHublet,
  messagesEnv,
  messagesUtk,
  hubspotUtk,
  portalId,
  referrer,
  hstc,
  hssc,
  email,
  identificationToken
}) {
  const domain = (0, _hubspotUrlUtils.getFullUrl)('api', {
    envOverride: messagesEnv,
    hubletOverride: messagesHublet
  });
  const requestParams = buildRequestParams({
    messagesUtk,
    hubspotUtk,
    portalId,
    referrer,
    hstc,
    hssc,
    email,
    identificationToken
  });
  const chatflowTag = (0, _getChatflowTagFromQueryParams.getChatflowTagFromQueryParams)();
  return `${domain}/livechat-public/v1/message/public/mobile${requestParams}&chatflow=${chatflowTag}`;
}