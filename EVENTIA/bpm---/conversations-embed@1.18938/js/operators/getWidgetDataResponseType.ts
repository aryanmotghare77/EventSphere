"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWidgetDataResponseType = void 0;
const TYPE = '@type';
const getWidgetDataResponseType = widgetData => widgetData === null || widgetData === void 0 ? void 0 : widgetData[TYPE];
exports.getWidgetDataResponseType = getWidgetDataResponseType;