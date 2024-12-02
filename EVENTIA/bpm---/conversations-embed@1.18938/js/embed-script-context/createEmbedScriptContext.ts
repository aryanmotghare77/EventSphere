"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEmbedScriptContext = createEmbedScriptContext;
var _hsGenerator = require("../utils/hsGenerator");
var _prepareVisitorIdentifiers = require("../utk/prepareVisitorIdentifiers");
var _envGetters = require("./envGetters");
var _EmbedScriptContext = _interopRequireDefault(require("./EmbedScriptContext"));
var _settingsHelpers = require("../external-api/settingsHelpers");
function createEmbedScriptContext() {
  var _window;
  const {
    messagesEnv,
    portalId,
    messagesHublet
  } = (0, _envGetters.getScriptEnvParams)();
  let useLocalBuild = false;
  try {
    useLocalBuild = localStorage && localStorage['live-chat-local-toggle'] === 'true';
    // eslint-disable-next-line no-empty
  } catch (e) {}
  const iFrameDomainOverride = ((_window = window) === null || _window === void 0 || (_window = _window.messagesConfig) === null || _window === void 0 ? void 0 : _window.iFrameDomain) || '';
  const iframeUuid = (0, _hsGenerator.getUuid)();
  const referrer = encodeURIComponent(document.referrer);
  const {
    messagesUtk,
    hubspotUtk,
    hstc,
    hssc,
    globalCookieOptOut,
    isFirstVisitorSession
  } = (0, _prepareVisitorIdentifiers.prepareVisitorIdentifiers)();
  return new _EmbedScriptContext.default({
    messagesHublet,
    globalCookieOptOut,
    hubspotUtk,
    hstc,
    hssc,
    iFrameDomainOverride,
    iframeUuid,
    isFirstVisitorSession,
    messagesEnv,
    messagesUtk,
    referrer,
    portalId,
    useLocalBuild,
    identificationEmail: (0, _settingsHelpers.getIdentificationEmail)(),
    identificationToken: (0, _settingsHelpers.getIdentificationToken)()
  });
}