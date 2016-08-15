"use strict";
const React = require("react");
const react_native_1 = require("react-native");
const common_1 = require("../assets/styles/common");
const articleItem_1 = require("../components/articleItem");
const styles = react_native_1.StyleSheet.create({});
class ArticleDetail extends React.Component {
    render() {
        const { article, navigator } = this.props;
        return (React.createElement(react_native_1.View, null, React.createElement(react_native_1.View, {style: [common_1.default.row]}, React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, {onPress: () => navigator.pop()}, "返回")), React.createElement(react_native_1.View, {style: []}, React.createElement(react_native_1.Text, null, "糗事", article.id))), React.createElement(react_native_1.View, null, React.createElement(articleItem_1.default, {article: article, navigator: navigator})), React.createElement(react_native_1.View, null)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArticleDetail;
