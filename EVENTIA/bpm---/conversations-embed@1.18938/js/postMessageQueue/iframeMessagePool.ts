"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iframeMessagePool = exports.createQueue = void 0;
var _getIframeFromDocumentQuery = require("./getIframeFromDocumentQuery");
var _postMessageToIframe = require("./postMessageToIframe");
var _executeAllIframeMessageQueueEvents = require("./executeAllIframeMessageQueueEvents");
const createQueue = () => {
  const queue = [];
  return {
    enqueue: event => queue.unshift(event),
    dequeue: () => queue.shift(),
    peek: () => queue[0]
  };
};
exports.createQueue = createQueue;
const iframeMessagePool = ({
  iframeSrc
}) => {
  const eventQueue = createQueue();
  return {
    post: (type, data = {}) => {
      var _iframe$contentDocume;
      const iframe = (0, _getIframeFromDocumentQuery.getIframeFromDocumentQuery)();
      const isNotLoaded = (iframe === null || iframe === void 0 || (_iframe$contentDocume = iframe.contentDocument) === null || _iframe$contentDocume === void 0 ? void 0 : _iframe$contentDocume.URL) === 'about:blank';
      if (!iframe || isNotLoaded) {
        eventQueue.enqueue({
          type,
          data
        });
      } else {
        (0, _postMessageToIframe.postMessageToIframe)({
          iframe,
          iframeSrc,
          type,
          data
        });
        (0, _executeAllIframeMessageQueueEvents.executeAllIframeMessageQueueEvents)({
          iframe,
          iframeSrc,
          eventQueue
        });
      }
    }
  };
};
exports.iframeMessagePool = iframeMessagePool;