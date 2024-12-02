"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preloadFont = void 0;
const parseFontFamily = fontFamily => fontFamily.replace(/ +/g, '_');
const getFontDownloadUrl = family => `https://cdn1.hubspot.net/googlefonts/fonts/${parseFontFamily(family)}/regular.woff2`;

/** preload a regular/fallback font so that the browser has chance to cache even if it is used consumed child iframe */
const preloadFont = fontFamily => {
  const linkEl = document.createElement('link');
  linkEl.id = 'live-chat-font-preload';
  linkEl.rel = 'preload';
  linkEl.href = getFontDownloadUrl(fontFamily);
  linkEl.as = 'font';
  linkEl.type = 'font/woff2';
  linkEl.crossOrigin = 'anonymous';
  document.head.appendChild(linkEl);
};
exports.preloadFont = preloadFont;