"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadWidgetCss = loadWidgetCss;
var _messagesWidgetShell = _interopRequireDefault(require("bender-url!../../sass/messagesWidgetShell.sass"));
// @ts-expect-error Untyped import

/**
 * Loads the widget's CSS file or injects the styles directly into the document.
 * @param {Document} doc
 */
function loadWidgetCss(doc) {
  const {
    hsConversationsSettings
  } = window;
  if (hsConversationsSettings !== null && hsConversationsSettings !== void 0 && hsConversationsSettings.avoidInlineStyles) {
    const linkTag = doc.createElement('link');
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('type', 'text/css');
    // Bender url loader returns the sass url of the file, we need the css
    linkTag.setAttribute('href', _messagesWidgetShell.default.replace('.sass', '.css'));
    doc.head.appendChild(linkTag);
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const styleContent = require('raw-loader!../../sass/messagesWidgetShell.sass');
  const styleTag = doc.createElement('style');
  styleTag.setAttribute('type', 'text/css');
  const textTag = document.createTextNode(styleContent);
  styleTag.appendChild(textTag);
  doc.head.appendChild(styleTag);
}