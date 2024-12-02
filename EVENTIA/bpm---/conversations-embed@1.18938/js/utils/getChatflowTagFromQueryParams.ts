"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChatflowTagFromQueryParams = getChatflowTagFromQueryParams;
function getChatflowTagFromQueryParams() {
  // eslint-disable-next-line compat/compat
  const url = new URL(window.location.href);
  return url.searchParams.get('chatflow') || '';
}