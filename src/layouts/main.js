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
const react_native_tab_navigator_1 = require('react-native-tab-navigator');
const Icon = require('react-native-vector-icons/FontAwesome');
const articleList_1 = require("../containers/articleList");
const message_1 = require("../containers/message");
const account_1 = require("../containers/account");
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "articles"
        };
    }
    switchTab(currentTab) {
        this.setState({ currentTab: currentTab });
    }
    render() {
        return (React.createElement(react_native_tab_navigator_1.default, null, React.createElement(react_native_tab_navigator_1.default.Item, {selected: this.state.currentTab === 'articles', title: "糗事", renderIcon: () => React.createElement(Icon, {name: "rocket", size: 20, color: "#900"}), renderSelectedIcon: () => React.createElement(Icon, {name: "rocket", size: 20, color: "#900"}), onPress: () => this.switchTab('articles')}, React.createElement(articleList_1.default, __assign({}, this.props))), React.createElement(react_native_tab_navigator_1.default.Item, {selected: this.state.currentTab === 'message', title: "小纸条", onPress: () => this.switchTab('message')}, React.createElement(message_1.default, null)), React.createElement(react_native_tab_navigator_1.default.Item, {selected: this.state.currentTab === 'account', title: "个人", onPress: () => this.switchTab('account')}, React.createElement(account_1.default, null))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
