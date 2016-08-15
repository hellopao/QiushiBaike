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
const articleItem_1 = require("../components/articleItem");
const { width, height } = react_native_1.Dimensions.get('window');
const styles = react_native_1.StyleSheet.create({});
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
            return (React.createElement(react_native_1.View, {tabLabel: category.text, key: index, style: [common_1.default.container]}, React.createElement(react_native_1.ListView, {style: [], contentContainerStyle: [], initialListSize: 1, dataSource: dataSource, renderRow: article => React.createElement(articleItem_1.default, {article: article, navigator: this.props.navigator}), enableEmptySections: true, onEndReached: () => this.loadMoreArticles(), onEndReachedThreshold: 10, refreshControl: React.createElement(react_native_1.RefreshControl, {refreshing: data.refreshing, onRefresh: () => this.refreshArticleList(), tintColor: "#000", title: "正在刷新糗事...", titleColor: "#000", colors: ['#eee'], progressBackgroundColor: "#fff"})})));
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
