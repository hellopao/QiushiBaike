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

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    articleContainer: {
        padding: 10,
        borderBottomWidth: 10,
        borderBottomColor: "#dfdfdf"
    },
    articleHead: {

    },
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
    articleMeta: {

    },
    metaItem: {
        marginRight: 5
    },
    metaText: {
        fontSize: 12
    },
    articleOptions: {

    }
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

    renderTextContent(article: IArticle) {
        return (
            <View>
                <Text style={[]}>{article.content}</Text>
            </View>
        )
    }

    renderImageContent(article: IArticle) {
        return (
            <View>
                <Text style={[]}>{article.content}</Text>
                <Image style={[styles.image, commonStyles.center]} source={{ uri: utils.getArticleImage(article) }}/>
            </View>
        )
    }

    renderVideoContent(article: IArticle) {
        return (
            <View>
                <Text style={[]}>{article.content}</Text>
                <Image style={[styles.image, commonStyles.center]} source={{ uri: article.pic_url }}/>
            </View>
        )
    }

    renderArticleItem(article: IArticle) {
        article.user = Object.assign({ login: "匿名用户", icon: "" }, article.user);

        var contentRendererMap = {
            "word": this.renderTextContent,
            "image": this.renderImageContent,
            "video": this.renderVideoContent
        };

        return (
            <View style={[styles.articleContainer]}>
                <View style={[styles.articleHead, commonStyles.row]}>
                    <Image source={{ uri: utils.getUserAvatar(article.user) }} style={[styles.avatar]} />
                    <View style={[commonStyles.center]}>
                        <Text style={[styles.author]}>{article.user.login}</Text>
                    </View>
                </View>
                <View style={[styles.articleContent]}>
                    {contentRendererMap[article.format](article) }
                </View>
                <View style={[styles.articleMeta, commonStyles.row]}>
                    <View style={[styles.metaItem]}>
                        <Text style={[styles.metaText]}>好笑{article.votes.up}</Text>
                    </View>
                    <View style={[styles.metaItem]}>
                        <Text style={[styles.metaText]}>评论{article.comments_count}</Text>
                    </View>
                    <View style={[styles.metaItem]}>
                        <Text style={[styles.metaText]}>分享{article.share_count}</Text>
                    </View>
                </View>
                <View style={[styles.articleOptions]}>
                </View>
            </View>
        )
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
                                renderRow={article => this.renderArticleItem(article) }
                                enableEmptySections={true}
                                onEndReached={() => this.loadMoreArticles() }
                                onEndReachedThreshold={10}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={data.refreshing}
                                        onRefresh={() => this.refreshArticleList() }
                                        tintColor="#ff0000"
                                        title="Loading..."
                                        titleColor="#00ff00"
                                        colors={['#ff0000', '#00ff00', '#0000ff']}
                                        progressBackgroundColor="#ffff00"
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


