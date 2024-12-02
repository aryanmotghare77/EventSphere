"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENTS = void 0;
exports.triggerEvent = triggerEvent;
// From hub-http
const EVENT_NAMESPACE = 'hubspot:messages:';
function triggerEvent(eventName, data) {
  let event;
  const namespacedName = `${EVENT_NAMESPACE}${eventName}`;
  if (typeof window.Event === 'function') {
    event = Object.assign(new Event(namespacedName), data);
  } else {
    event = Object.assign(document.createEvent('Event'), data);
    event.initEvent(namespacedName, true, true);
  }
  window.dispatchEvent(event);
}
const EVENTS = exports.EVENTS = {
  messagesInitialized: ({
    messageWillRender,
    reason
  }) => {
    triggerEvent('initialized', {
      messageWillRender,
      reason
    });
  }
};