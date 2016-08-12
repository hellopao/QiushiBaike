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
const react_redux_1 = require("react-redux");
const _1 = require("./store/");
const main_1 = require("./layouts/main");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    configureScene() {
        return Object.assign({}, react_native_1.Navigator.SceneConfigs.HorizontalSwipeJump, { gestures: { pop: null } });
    }
    renderScene(route, navigator) {
        const Component = route.component;
        return (React.createElement(Component, __assign({}, route.props, {navigator: navigator})));
    }
    render() {
        return (React.createElement(react_redux_1.Provider, {store: _1.default()}, React.createElement(react_native_1.Navigator, {ref: navigator => { this.navigator = navigator; }, initialRoute: { name: "Main", component: main_1.default }, configureScene: this.configureScene, renderScene: this.renderScene})));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
