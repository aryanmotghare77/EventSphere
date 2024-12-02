"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomain = getDomain;
exports.getDomainPrefix = getDomainPrefix;
exports.getEnvPostfix = getEnvPostfix;
exports.getHubletDomainPostfix = getHubletDomainPostfix;
exports.getHubletPostfix = getHubletPostfix;
exports.getPathPrefix = getPathPrefix;
exports.getSubDomain = getSubDomain;
exports.getTld = getTld;
var Hublets = _interopRequireWildcard(require("../hublets"));
var _subdomains = require("../subdomains");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Enviro free implementation of `hubspot-url-utils`.

function getHubletPostfix(hublet, overrideConfig) {
  const hasHubletOverride = overrideConfig && overrideConfig.hubletOverride;
  const hubletToUse = hasHubletOverride ? overrideConfig.hubletOverride : hublet;
  if (hubletToUse === Hublets.na1) {
    return '';
  }
  return `-${hubletToUse}`;
}
function getSubDomain(hublet, prefix, overrideConfig) {
  const hasHubletPostfixOverride = overrideConfig && overrideConfig.hubletPostfixLocation && overrideConfig.hubletPostfixLocation === 'domain';
  if (hasHubletPostfixOverride) {
    return prefix;
  }
  if (prefix === _subdomains.Subdomains.APP_API) {
    prefix = _subdomains.Subdomains.APP;
  }
  return `${prefix}${getHubletPostfix(hublet, overrideConfig)}`;
}
function getDomain(hublet, short, overrideConfig) {
  const domainPrefix = getDomainPrefix(overrideConfig);
  const envPostfix = getEnvPostfix(short, overrideConfig);
  const hubletDomainPostfix = getHubletDomainPostfix(hublet, overrideConfig);
  return `${domainPrefix}${envPostfix}${hubletDomainPostfix}`;
}
function getEnvPostfix(short, overrideConfig) {
  const hasEnvOverride = overrideConfig && overrideConfig.envOverride;
  const envToUse = hasEnvOverride ? overrideConfig.envOverride : short;
  if (envToUse === 'qa') {
    return 'qa';
  }
  return '';
}
function getDomainPrefix(overrideConfig) {
  const hasDomainOverride = overrideConfig && overrideConfig.domainOverride;
  if (hasDomainOverride) {
    return overrideConfig.domainOverride;
  }
  return 'hubspot';
}
function getHubletDomainPostfix(hublet, overrideConfig) {
  const hasHubletPostfixxOverride = overrideConfig && overrideConfig.hubletPostfixLocation && overrideConfig.hubletPostfixLocation === 'domain';
  if (!hasHubletPostfixxOverride) {
    return '';
  }
  return getHubletPostfix(hublet, overrideConfig);
}
function getTld(overrideConfig) {
  const hasTldOverride = overrideConfig && overrideConfig.tldOverride;
  if (hasTldOverride) {
    return overrideConfig.tldOverride;
  }
  return 'com';
}
function getPathPrefix(subDomainPrefix) {
  if (subDomainPrefix === _subdomains.Subdomains.APP_API) {
    return '/api';
  }
  return '';
}