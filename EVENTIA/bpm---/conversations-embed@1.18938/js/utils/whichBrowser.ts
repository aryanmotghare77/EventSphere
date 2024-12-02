"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafari = void 0;
var _window;
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent

const userAgent = (_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 || (_window = _window.userAgent) === null || _window === void 0 ? void 0 : _window.toLowerCase();
const isSafari = () => (userAgent === null || userAgent === void 0 ? void 0 : userAgent.includes('safari/')) && !(userAgent !== null && userAgent !== void 0 && userAgent.includes('chrome/')) && !(userAgent !== null && userAgent !== void 0 && userAgent.includes('edge/'));
exports.isSafari = isSafari;