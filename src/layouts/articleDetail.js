"use strict";
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const Moment = require("mini-moment");
const common_1 = require("../assets/styles/common");
const utils = require("../utils/utils");
const articleItem_1 = require("../components/articleItem");
const comment_1 = require("../actions/comment");
const styles = react_native_1.StyleSheet.create({
    head: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    back: {
        width: 50,
        zIndex: 2
    },
    title: {
        marginLeft: -50
    },
    item: {},
    left: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    avtar: {
        width: 36,
        height: 36,
        borderRadius: 18
    },
    right: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    user: {},
    userText: {
        color: "#aaa"
    },
    refer: {
        backgroundColor: "#ddd",
        padding: 5
    },
    timeText: {
        color: "#aaa",
        fontSize: 12
    }
});
class ArticleDetail extends React.Component {
    componentDidMount() {
        const { actions, article } = this.props;
        actions.resetCommentList();
        react_native_1.InteractionManager.runAfterInteractions(() => {
            actions.fetchCommentList(article.id, 1);
        });
    }
    loadMoreComments() {
        const { actions, article, comment } = this.props;
        if (comment.page && !comment.done) {
            actions.fetchCommentList(article.id, comment.page + 1);
        }
    }
    renderCommentItem(comment) {
        return (React.createElement(react_native_1.View, {style: [common_1.default.row, styles.item]}, React.createElement(react_native_1.View, {style: [common_1.default.center, styles.left]}, React.createElement(react_native_1.Image, {source: { uri: utils.getUserAvatar(comment.user) }, style: [styles.avtar]})), React.createElement(react_native_1.View, {style: [common_1.default.item, styles.right]}, React.createElement(react_native_1.View, {style: [common_1.default.row]}, React.createElement(react_native_1.View, {style: [common_1.default.mr_10]}, React.createElement(react_native_1.Text, {style: []}, comment.floor, "楼")), React.createElement(react_native_1.View, {style: [styles.user]}, React.createElement(react_native_1.Text, {style: [styles.userText]}, comment.user.login))), React.createElement(react_native_1.View, {style: [common_1.default.mt_10]}, React.createElement(react_native_1.Text, null, comment.content)), comment.refer &&
            React.createElement(react_native_1.View, {style: [common_1.default.mt_10, styles.refer]}, React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, {style: [styles.userText]}, comment.refer.user.login)), React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, null, comment.refer.content))), React.createElement(react_native_1.View, {style: [common_1.default.mt_10]}, React.createElement(react_native_1.Text, {style: [styles.timeText]}, Moment.fromNow(comment.created_at * 1000))))));
    }
    render() {
        const { article, navigator, comment } = this.props;
        const comments = new react_native_1.ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows(comment.list);
        return (React.createElement(react_native_1.View, {style: [common_1.default.container]}, React.createElement(react_native_1.View, {style: [common_1.default.row, styles.head]}, React.createElement(react_native_1.TouchableOpacity, {onPress: () => navigator.pop(), style: [common_1.default.center, styles.back]}, React.createElement(react_native_1.Text, null, "返回")), React.createElement(react_native_1.View, {style: [common_1.default.item, common_1.default.center, styles.title]}, React.createElement(react_native_1.Text, null, "糗事", article.id))), React.createElement(react_native_1.View, {style: [common_1.default.container]}, React.createElement(react_native_1.ListView, {style: [], contentContainerStyle: [], initialListSize: 1, dataSource: comments, renderHeader: () => React.createElement(articleItem_1.default, {article: article, navigator: navigator}), renderRow: this.renderCommentItem.bind(this), enableEmptySections: true, onEndReached: () => this.loadMoreComments(), onEndReachedThreshold: 10}))));
    }
}
function mapStateToProps(state) {
    return {
        comment: state.comment,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators({ fetchCommentList: comment_1.fetchCommentList, resetCommentList: comment_1.resetCommentList }, dispatch)
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
