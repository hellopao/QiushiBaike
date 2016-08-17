"use strict";
const React = require("react");
const react_native_1 = require("react-native");
const utils = require("../utils/utils");
const common_1 = require("../assets/styles/common");
const icon_1 = require("../components/icon");
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#eee"
    },
    item: {
        backgroundColor: "#fff"
    },
    title: {
        height: 30
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    icon: {
        width: 40
    }
});
class Account extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, {style: [styles.container]}, React.createElement(react_native_1.View, {style: [common_1.default.center, styles.item, styles.title]}, React.createElement(react_native_1.Text, null, "我")), React.createElement(react_native_1.View, {style: [common_1.default.row, common_1.default.p_10, common_1.default.mt_10, styles.item]}, React.createElement(react_native_1.View, {style: [common_1.default.ml_10]}, React.createElement(react_native_1.Image, {source: { uri: utils.getUserAvatar() }, style: [styles.avatar]})), React.createElement(react_native_1.View, {style: [common_1.default.item, common_1.default.verticalCenter]}, React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, null, "登录/注册")))), React.createElement(react_native_1.View, {style: [common_1.default.row, common_1.default.mt_10, styles.item]}, React.createElement(react_native_1.View, {style: [common_1.default.center, styles.icon]}, React.createElement(icon_1.default, {name: "posts"})), React.createElement(react_native_1.View, {style: [common_1.default.item, common_1.default.verticalCenter]}, React.createElement(react_native_1.Text, null, "管理我的糗事和动态"))), React.createElement(react_native_1.View, {style: [common_1.default.mt_10, styles.item]}, React.createElement(react_native_1.View, {style: [common_1.default.row]}, React.createElement(react_native_1.View, {style: [common_1.default.center, styles.icon]}, React.createElement(icon_1.default, {name: "night"})), React.createElement(react_native_1.View, {style: [common_1.default.item, common_1.default.verticalCenter]}, React.createElement(react_native_1.Text, null, "夜间模式"))), React.createElement(react_native_1.View, {style: [common_1.default.row]}, React.createElement(react_native_1.View, {style: [common_1.default.center, styles.icon]}, React.createElement(icon_1.default, {name: "setting"})), React.createElement(react_native_1.View, {style: [common_1.default.item, common_1.default.verticalCenter]}, React.createElement(react_native_1.Text, null, "设置"))))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Account;
