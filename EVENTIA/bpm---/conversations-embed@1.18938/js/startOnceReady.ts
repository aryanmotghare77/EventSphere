"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startOnceReady = startOnceReady;
var _WidgetShell = require("./WidgetShell");
var _loadWidgetCss = require("./utils/loadWidgetCss");
var _createEmbedScriptContext = require("./embed-script-context/createEmbedScriptContext");
var _hasRequiredFeatures = require("./utils/hasRequiredFeatures");
var _setupExternalApi = require("./external-api/setupExternalApi");
var _getExternalApiSettings = require("./external-api/getExternalApiSettings");
var _constants = require("./external-api/constants");
var _EventEmitter = _interopRequireDefault(require("./event-emitter/EventEmitter"));
var _flushOnReadyCallbacks = require("./external-api/flushOnReadyCallbacks");
var _DevLogger = _interopRequireDefault(require("./external-api/DevLogger"));
var _ErrorLogger = require("./error-logging/ErrorLogger");
var _envGetters = require("./embed-script-context/envGetters");
var _hubspotUrlUtils = require("hubspot-url-utils");
const widgetNotYetLoadedWarning = () => {
  // eslint-disable-next-line no-console
  console.warn(`loadImmediately is set to false and widget.load() has not been called on window.${_constants.GLOBAL_VARIABLE} yet. Please call widget.load() first or set loadImmediately on window.${_constants.SETTINGS_VARIABLE} to true.`);
};
function createWidgetShell({
  eventEmitter,
  logError
}) {
  const embedScriptContext = (0, _createEmbedScriptContext.createEmbedScriptContext)();
  const widgetShell = new _WidgetShell.WidgetShell(embedScriptContext, logError, eventEmitter);
  if (!window.hubspot_live_messages_running) {
    window.hubspot_live_messages_running = true;
    widgetShell.start();
  } else {
    // eslint-disable-next-line no-console
    console.warn('duplicate instance of live chat exists on page');
  }
  return widgetShell;
}
function init(logError) {
  (0, _loadWidgetCss.loadWidgetCss)(document);
  if (!(0, _getExternalApiSettings.getExternalApiSettings)().loadImmediately) {
    const eventEmitter = new _EventEmitter.default();
    const devLogger = new _DevLogger.default();
    (0, _setupExternalApi.setupExternalApi)({
      debug: widgetNotYetLoadedWarning,
      on: eventEmitter.on,
      off: eventEmitter.off,
      clear: widgetNotYetLoadedWarning,
      resetAndReloadWidget: widgetNotYetLoadedWarning,
      widget: {
        load: () => {
          const widgetShell = createWidgetShell({
            eventEmitter,
            logError
          });
          widgetShell.loadWidget();
        },
        remove: widgetNotYetLoadedWarning,
        open: widgetNotYetLoadedWarning,
        close: widgetNotYetLoadedWarning,
        refresh: widgetNotYetLoadedWarning,
        status: () => ({
          loaded: false
        })
      }
    });
    (0, _flushOnReadyCallbacks.flushOnReadyCallbacks)({
      logger: devLogger
    });
  } else {
    createWidgetShell({
      logError
    });
  }
}
function startOnceReady() {
  /**
   * Before we do anything else, make sure we're operating in a supported browser
   */
  if ((0, _hasRequiredFeatures.hasRequiredFeatures)(window)) {
    // Don't start widget if in KB article proxy endpoint
    const fullUrl = (0, _hubspotUrlUtils.getFullUrl)('app-api');
    const kbEmbedRegex = new RegExp(`^${fullUrl}/conversations/assistants/v1/content-embed`, 'i');
    if (!kbEmbedRegex.test(window.location.href)) {
      const errorLogger = new _ErrorLogger.ErrorLogger();
      if (!(0, _envGetters.getIsLocal)()) {
        errorLogger.captureErrors(() => {
          init(errorLogger);
        });
      } else {
        init();
      }
    }
  }
}