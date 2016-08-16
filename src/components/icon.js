"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const react_native_1 = require("react-native");
const fontMap = require('../assets/iconfonts/QiuBaiIcon.json');
const FontFamily = "QiuBaiIcon";
const getIcon = function (name) {
    return String.fromCharCode(fontMap[name]);
};
class Icon extends React.Component {
    render() {
        return (React.createElement(react_native_1.Text, __assign({style: { fontFamily: FontFamily, fontSize: 30, fontWeight: "normal", fontStyle: "normal" }}, this.props), getIcon(this.props.name)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Icon;
