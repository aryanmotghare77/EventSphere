"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPerfAttributes = getPerfAttributes;
var _constants = require("./constants");
var _buildCmsScriptLoaderSrc = require("./util/buildCmsScriptLoaderSrc");
var _buildCmsScriptLoaderPath = require("./util/buildCmsScriptLoaderPath");
var _buildNonCmsScriptLoaderPath = require("./util/buildNonCmsScriptLoaderPath");
function getPerfAttributes({
  portalId,
  messagesEnv
}) {
  try {
    const env = messagesEnv === 'qa' ? 'qa' : '';
    const nonCmsSriptLoaderScriptPath = (0, _buildNonCmsScriptLoaderPath.buildNonCmsScriptLoaderPath)({
      env,
      portalId
    });
    const cmsScriptLoaderScriptSrc = (0, _buildCmsScriptLoaderSrc.buildCmsScriptLoaderSrc)({
      portalId
    });
    const cmsScriptLoaderScriptPath = (0, _buildCmsScriptLoaderPath.buildCmsScriptLoaderPath)({
      portalId
    });
    const embedScriptPath = `https://js.usemessages${env}.com/conversations-embed.js`;

    // Get All Entries
    const entries = performance.getEntries().map(({
      name
    }) => name);
    const safeNonCmsScriptLoaderScriptPath = entries.find(value => value.includes(nonCmsSriptLoaderScriptPath)) || nonCmsSriptLoaderScriptPath;
    const safeCmsScriptLoaderScriptPath = entries.find(value => value.includes(cmsScriptLoaderScriptPath)) || cmsScriptLoaderScriptPath;
    const usingCmsScriptLoader = Boolean(document.querySelector(`script[src^="${cmsScriptLoaderScriptSrc}"]`));
    performance.measure(_constants.EXECUTION_MEASUREMENT_PRE_DELAY, _constants.START_MARK_PRE_DELAY, _constants.END_MARK_PRE_DELAY);
    performance.measure(_constants.EXECUTION_MEASUREMENT_POST_DELAY, _constants.START_MARK_POST_DELAY, _constants.END_MARK_POST_DELAY);
    const iframeLoadTimePreDelay = performance.getEntriesByName(_constants.EXECUTION_MEASUREMENT_PRE_DELAY)[0];
    const iframeLoadTimePostDelay = performance.getEntriesByName(_constants.EXECUTION_MEASUREMENT_POST_DELAY)[0];
    const iframeLoadTimeDuration = iframeLoadTimePreDelay.duration + iframeLoadTimePostDelay.duration;
    const nonCmsScriptLoaderScriptFetchTime = performance.getEntriesByName(safeNonCmsScriptLoaderScriptPath)[0];
    const cmsScriptLoaderScriptFetchTime = performance.getEntriesByName(safeCmsScriptLoaderScriptPath)[0];
    const fetchTimeToUse = usingCmsScriptLoader ? cmsScriptLoaderScriptFetchTime : nonCmsScriptLoaderScriptFetchTime;
    const scriptLoaderFetchTimeDuration = fetchTimeToUse.duration;
    const embedScriptFetchTime = performance.getEntriesByName(embedScriptPath)[0];
    const embedScriptFetchTimeDuration = embedScriptFetchTime.duration;
    if (iframeLoadTimeDuration && scriptLoaderFetchTimeDuration && embedScriptFetchTimeDuration) {
      return {
        iframeLoadTime: iframeLoadTimeDuration,
        scriptLoaderScriptTime: scriptLoaderFetchTimeDuration,
        embedScriptTime: embedScriptFetchTimeDuration
      };
    }
  } catch (error) {
    //
  }
  return null;
}