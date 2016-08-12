"use strict";
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const ScrollableTabView = require('react-native-scrollable-tab-view');
const config_1 = require("../constants/config");
const category_1 = require("../actions/category");
const article_1 = require("../actions/article");
const common_1 = require("../assets/styles/common");
const utils = require("../utils/utils");
const { width, height } = react_native_1.Dimensions.get('window');
const styles = react_native_1.StyleSheet.create({
    articleContainer: {
        padding: 10,
        borderBottomWidth: 10,
        borderBottomColor: "#dfdfdf"
    },
    articleHead: {},
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18
    },
    author: {
        fontSize: 12,
        marginLeft: 10
    },
    articleContent: {
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        width: width,
        height: height
    },
    articleMeta: {},
    metaItem: {
        marginRight: 5
    },
    metaText: {
        fontSize: 12
    },
    articleOptions: {}
});
class ArticleList extends React.Component {
    componentDidMount() {
        this.props.actions.fetchArticleList(this.props.category, 1);
    }
    onCategoryChange(index) {
        const category = config_1.CATEGORIES[index];
        const { article, actions } = this.props;
        actions.switchArticleCategory(category);
        if (!article[category.name] || !article[category.name].list.length) {
            actions.fetchArticleList(category, 1);
        }
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
    renderArticleItem(article) {
        article.user = Object.assign({ login: "匿名用户", icon: "" }, article.user);
        var contentRendererMap = {
            "word": this.renderTextContent,
            "image": this.renderImageContent,
            "video": this.renderVideoContent
        };
        return (React.createElement(react_native_1.View, {style: [styles.articleContainer]}, React.createElement(react_native_1.View, {style: [styles.articleHead, common_1.default.row]}, React.createElement(react_native_1.Image, {source: { uri: utils.getUserAvatar(article.user) }, style: [styles.avatar]}), React.createElement(react_native_1.View, {style: [common_1.default.center]}, React.createElement(react_native_1.Text, {style: [styles.author]}, article.user.login))), React.createElement(react_native_1.View, {style: [styles.articleContent]}, contentRendererMap[article.format](article)), React.createElement(react_native_1.View, {style: [styles.articleMeta, common_1.default.row]}, React.createElement(react_native_1.View, {style: [styles.metaItem]}, React.createElement(react_native_1.Text, {style: [styles.metaText]}, "好笑", article.votes.up)), React.createElement(react_native_1.View, {style: [styles.metaItem]}, React.createElement(react_native_1.Text, {style: [styles.metaText]}, "评论", article.comments_count)), React.createElement(react_native_1.View, {style: [styles.metaItem]}, React.createElement(react_native_1.Text, {style: [styles.metaText]}, "分享", article.share_count))), React.createElement(react_native_1.View, {style: [styles.articleOptions]})));
    }
    loadMoreArticles() {
        const { category, article, actions } = this.props;
        const data = article[category.name];
        if (data.list) {
            actions.fetchArticleList(category, data.page + 1);
        }
    }
    refreshArticleList() {
        const { category, actions } = this.props;
        actions.fetchArticleList(category, 1, true);
    }
    render() {
        return (React.createElement(ScrollableTabView, {onChangeTab: (e) => this.onCategoryChange(e.i)}, config_1.CATEGORIES.map((category, index) => {
            const data = this.props.article[category.name] || { list: [], page: 1, refreshing: false };
            const articles = data.list || [];
            const dataSource = new react_native_1.ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(articles);
            return (React.createElement(react_native_1.View, {tabLabel: category.text, key: index, style: [common_1.default.container]}, React.createElement(react_native_1.ListView, {style: [], contentContainerStyle: [], initialListSize: 1, dataSource: dataSource, renderRow: article => this.renderArticleItem(article), enableEmptySections: true, onEndReached: () => this.loadMoreArticles(), onEndReachedThreshold: 10, refreshControl: React.createElement(react_native_1.RefreshControl, {refreshing: data.refreshing, onRefresh: () => this.refreshArticleList(), tintColor: "#ff0000", title: "Loading...", titleColor: "#00ff00", colors: ['#ff0000', '#00ff00', '#0000ff'], progressBackgroundColor: "#ffff00"})})));
        })));
    }
}
function mapStateToProps(state) {
    return {
        article: state.article,
        category: state.category
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators({ fetchArticleList: article_1.fetchArticleList, switchArticleCategory: category_1.switchArticleCategory }, dispatch)
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ArticleList);
