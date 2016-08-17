"use strict";
const React = require("react");
const react_native_1 = require("react-native");
const common_1 = require("../assets/styles/common");
const utils = require("../utils/utils");
const articleDetail_1 = require("../layouts/articleDetail");
const user_1 = require("../layouts/user");
const { width, height } = react_native_1.Dimensions.get('window');
const styles = react_native_1.StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff"
    },
    head: {},
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18
    },
    author: {
        fontSize: 12,
        marginLeft: 10
    },
    content: {
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        width: width,
        height: height
    },
    meta: {},
    metaItem: {
        marginRight: 5
    },
    metaText: {
        fontSize: 12
    },
    options: {}
});
class ArticleItem extends React.Component {
    onArticleContentClick() {
        const { navigator, article } = this.props;
        const routes = navigator.getCurrentRoutes();
        const currentRoute = routes[routes.length - 1];
        if (currentRoute['name'] === "ArticleDetail") {
            return;
        }
        navigator.push({
            name: "ArticleDetail",
            component: articleDetail_1.default,
            props: {
                article: article
            }
        });
    }
    onArticleUserClick() {
        const { navigator, article } = this.props;
        if (!article.user || !article.user.icon)
            return;
        navigator.push({
            name: "User",
            component: user_1.default,
            props: {
                rawUser: article.user
            }
        });
    }
    renderTextContent(article) {
        return (React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, {style: []}, article.content)));
    }
    renderImageContent(article) {
        return (React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, {style: []}, article.content), React.createElement(react_native_1.Image, {style: [styles.image, common_1.default.center], source: { uri: utils.getArticleImage(article) }})));
    }
    renderVideoContent(article) {
        return (React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, {style: []}, article.content), React.createElement(react_native_1.Image, {style: [styles.image, common_1.default.center], source: { uri: article.pic_url }})));
    }
    render() {
        const { article } = this.props;
        article.user = Object.assign({ login: "匿名用户", icon: "" }, article.user);
        var contentRendererMap = {
            "word": this.renderTextContent,
            "image": this.renderImageContent,
            "video": this.renderVideoContent
        };
        return (React.createElement(react_native_1.View, {style: [styles.container]}, React.createElement(react_native_1.View, {style: [styles.head]}, React.createElement(react_native_1.TouchableOpacity, {style: [common_1.default.row], onPress: () => this.onArticleUserClick()}, React.createElement(react_native_1.Image, {source: { uri: utils.getUserAvatar(article.user) }, style: [styles.avatar]}), React.createElement(react_native_1.View, {style: [common_1.default.center]}, React.createElement(react_native_1.Text, {style: [styles.author]}, article.user.login)))), React.createElement(react_native_1.TouchableOpacity, {onPress: () => this.onArticleContentClick()}, React.createElement(react_native_1.View, {style: [styles.content]}, contentRendererMap[article.format](article))), React.createElement(react_native_1.View, {style: [styles.meta, common_1.default.row]}, React.createElement(react_native_1.View, {style: [styles.metaItem]}, React.createElement(react_native_1.Text, {style: [styles.metaText]}, "好笑", article.votes.up)), React.createElement(react_native_1.View, {style: [styles.metaItem]}, React.createElement(react_native_1.Text, {style: [styles.metaText]}, "评论", article.comments_count)), React.createElement(react_native_1.View, {style: [styles.metaItem]}, React.createElement(react_native_1.Text, {style: [styles.metaText]}, "分享", article.share_count))), React.createElement(react_native_1.View, {style: [styles.options]})));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArticleItem;
