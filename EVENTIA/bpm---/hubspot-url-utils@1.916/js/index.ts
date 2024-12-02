"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullUrl = getFullUrl;
exports.getFullUrlWithCurrentSubDomain = getFullUrlWithCurrentSubDomain;
var _enviro = _interopRequireDefault(require("enviro"));
var _internal = require("./internal");
function getFullUrl(subDomainPrefix, overrideConfig) {
  const subDomain = (0, _internal.getSubDomain)(subDomainPrefix, overrideConfig);
  const domain = (0, _internal.getDomain)(overrideConfig);
  const tld = (0, _internal.getTld)(overrideConfig);
  const pathPrefix = (0, _internal.getPathPrefix)(subDomainPrefix);
  return `https://${subDomain}.${domain}.${tld}${pathPrefix}`;
}
function getFullUrlWithCurrentSubDomain() {
  const subdomain = _enviro.default.deployed() ? 'app' : 'local';
  return getFullUrl(subdomain);
}