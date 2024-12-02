"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UTK_REGEX = void 0;
exports.isUtk = isUtk;
// Check for a 32 character UTK.  Eg be0257d806634aedbe9eb4537e05830a
const UTK_REGEX = exports.UTK_REGEX = /[a-zA-Z\d]{32}/;
function isUtk(uuid) {
  return UTK_REGEX.test(uuid);
}