"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.put = exports.post = exports.get = exports.doRequest = exports.DONE_STATE = void 0;
const DONE_STATE = exports.DONE_STATE = 4;
const requestFailed = statusCode => statusCode >= 300;
const doRequest = method => (url, body) => callback => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== DONE_STATE) {
      return;
    }
    try {
      const json = JSON.parse(request.responseText);
      if (requestFailed(request.status)) {
        callback(null, json);
      } else {
        callback(json);
      }
    } catch (e) {
      callback(null, 'Invalid api response');
    }
  });
  request.open(method, url);
  request.send(body);
  return request;
};
exports.doRequest = doRequest;
const get = exports.get = doRequest('GET');
const post = exports.post = doRequest('POST');
const put = exports.put = doRequest('PUT');