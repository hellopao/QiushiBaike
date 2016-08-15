"use strict";

import * as React from "react";
import {StyleSheet, Navigator, View, ListView, RefreshControl, Text, Image, Dimensions} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ScrollableTabView from 'react-native-scrollable-tab-view';

import {CATEGORIES} from "../constants/config";

import {switchArticleCategory} from "../actions/category";
import {fetchArticleList} from "../actions/article";

import commonStyles from "../assets/styles/common";

import * as utils from "../utils/utils";

import IProps from "../interfaces/props";
import IArticle from "../interfaces/article";

import ArticleItem from "../components/articleItem";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
});

interface Props extends IProps {
    actions?: {
        fetchArticleList: (category, page: number, refresh?: boolean) => any;
        switchArticleCategory: (category) => any;
    };
    category: any;
    article: {
        [categoryId: string]: {
            list: IArticle[];
            page: number;
            refreshing: boolean;
        };
    }
}

interface State {
    refreshing?: boolean;
}

class ArticleList extends React.Component<Props, State> {

    componentDidMount() {
        this.props.actions.fetchArticleList(this.props.category, 1);
    }

    onCategoryChange(index: number) {
        const category = CATEGORIES[index];
        const {article, actions} = this.props;

        actions.switchArticleCategory(category);

        if (!article[category.name] || !article[category.name].list.length) {
            actions.fetchArticleList(category, 1);
        }
    }

    loadMoreArticles() {
        const {category, article, actions} = this.props;

        const data = article[category.name];
        if (data.list) {
            actions.fetchArticleList(category, data.page + 1);
        }
    }

    refreshArticleList() {
        const {category, actions} = this.props;
        actions.fetchArticleList(category, 1, true);
    }

    render() {
        return (
            <ScrollableTabView onChangeTab={(e) => this.onCategoryChange(e.i) }>
                {CATEGORIES.map((category, index) => {
                    const data = this.props.article[category.name] || { list: [], page: 1, refreshing: false };
                    const articles = data.list || [];
                    const dataSource = new ListView.DataSource({
                        rowHasChanged: (r1, r2) => r1 !== r2
                    }).cloneWithRows(articles);
                    return (
                        <View tabLabel={category.text} key={index} style={[commonStyles.container]}>
                            <ListView
                                style={[]}
                                contentContainerStyle={[]}
                                initialListSize={1}
                                dataSource={dataSource}
                                renderRow={article => <ArticleItem article={article} navigator={this.props.navigator}/> }
                                enableEmptySections={true}
                                onEndReached={() => this.loadMoreArticles() }
                                onEndReachedThreshold={10}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={data.refreshing}
                                        onRefresh={() => this.refreshArticleList() }
                                        tintColor="#000"
                                        title="正在刷新糗事..."
                                        titleColor="#000"
                                        colors={['#eee']}
                                        progressBackgroundColor="#fff"
                                        />
                                }>
                            </ListView>
                        </View>
                    )
                }) }
            </ScrollableTabView>
        )
    }
}

function mapStateToProps(state) {
    return {
        article: state.article,
        category: state.category
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ fetchArticleList, switchArticleCategory }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);


