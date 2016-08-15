"use strict";
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const common_1 = require("../assets/styles/common");
const articleItem_1 = require("../components/articleItem");
const comment_1 = require("../actions/comment");
const styles = react_native_1.StyleSheet.create({
    head: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    back: {
        width: 50
    }
});
class ArticleDetail extends React.Component {
    componentDidMount() {
        const { actions, article } = this.props;
        actions.fetchCommentList(article.id, 1);
    }
    render() {
        const { article, navigator } = this.props;
        return (React.createElement(react_native_1.View, {style: [common_1.default.container]}, React.createElement(react_native_1.View, {style: [common_1.default.row, styles.head]}, React.createElement(react_native_1.View, {style: [common_1.default.center, styles.back]}, React.createElement(react_native_1.Text, {onPress: () => navigator.pop()}, "返回")), React.createElement(react_native_1.View, {style: [common_1.default.center]}, React.createElement(react_native_1.Text, null, "糗事", article.id))), React.createElement(react_native_1.View, null, React.createElement(articleItem_1.default, {article: article, navigator: navigator})), React.createElement(react_native_1.View, null, this.props.comment.list.map((comment, index) => {
            return (React.createElement(react_native_1.View, {key: index}, React.createElement(react_native_1.Text, null, comment.content)));
        }))));
    }
}
function mapStateToProps(state) {
    return {
        comment: state.comment,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators({ fetchCommentList: comment_1.fetchCommentList }, dispatch)
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
