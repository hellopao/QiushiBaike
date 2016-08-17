"use strict";

import * as React from "react";
import {StyleSheet, Navigator, TouchableOpacity, View, Text, Image, Dimensions} from "react-native";

import commonStyles from "../assets/styles/common";

import * as utils from "../utils/utils";

import IProps from "../interfaces/props";
import IArticle from "../interfaces/article";

import ArticleDetail from "../layouts/articleDetail";
import User from "../layouts/user";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff"
    },
    head: {

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
    content: {
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        width: width,
        height: height
    },
    meta: {

    },
    metaItem: {
        marginRight: 5
    },
    metaText: {
        fontSize: 12
    },
    options: {

    }
});

interface Props extends IProps {
    article: IArticle;
}

interface State {
}

class ArticleItem extends React.Component<Props, State> {

    onArticleContentClick() {
        const {navigator, article} = this.props;

        const routes = navigator.getCurrentRoutes();
        const currentRoute = routes[routes.length - 1];
        if (currentRoute['name'] === "ArticleDetail") {
            return;
        }

        navigator.push({
            name: "ArticleDetail", 
            component: ArticleDetail, 
            props: {
                article
            }
        })
    }

    onArticleUserClick() {
        const {navigator, article} = this.props;

        if (!article.user) return;

        navigator.push({
            name: "User", 
            component: User, 
            props: {
                rawUser: article.user
            }
        })
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

    render() {
        const {article} = this.props;

        article.user = Object.assign({ login: "匿名用户", icon: "" }, article.user);

        var contentRendererMap = {
            "word": this.renderTextContent,
            "image": this.renderImageContent,
            "video": this.renderVideoContent
        };

        return (
            <View style={[styles.container]}>
                <View style={[styles.head]}>
                    <TouchableOpacity style={[commonStyles.row]} onPress={() => this.onArticleUserClick()}>
                        <Image source={{ uri: utils.getUserAvatar(article.user) }} style={[styles.avatar]} />
                        <View style={[commonStyles.center]}>
                            <Text style={[styles.author]}>{article.user.login}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.onArticleContentClick()}>
                    <View style={[styles.content]}>
                        {contentRendererMap[article.format](article) }
                    </View>
                </TouchableOpacity>
                <View style={[styles.meta, commonStyles.row]}>
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
                <View style={[styles.options]}>
                </View>
            </View>
        )
    }

    
}

export default ArticleItem;


