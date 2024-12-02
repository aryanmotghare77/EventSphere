'use es6';

import {
    FEEDBACK_TYPE
} from '../messages';
import {
    getOrigin
} from '../urls';
import eventAggregator from './events';
const messageAggregator = (url, channel) => {
    const originTest = new RegExp(`^${getOrigin(url)}`);
    const subscribe = eventAggregator(window, 'message');
    return subscriber => subscribe(({
        data,
        origin,
        source
    }) => {
        if (!(data && originTest.test(origin))) return;
        let message;
        try {
            message = JSON.parse(data);
        } catch (e) {
            return;
        }
        const {
            payload: payload1,
            type
        } = message;
        if (!(payload1 && type === FEEDBACK_TYPE)) return;
        const {
            channel: messageChannel,
            payload: {
                messageType,
                payload: payload2
            }
        } = payload1;
        if (messageChannel !== channel) return;
        subscriber(messageType, payload2, origin, source);
    });
};
export const parentListener = channel => messageAggregator(document.referrer, channel);
export const frameListener = (iframe, channel) => messageAggregator(iframe.src, channel);
export default messageAggregator;