"use strict";

import * as React from "react";
import {StyleSheet, Navigator, InteractionManager, Dimensions, TouchableOpacity, View, ListView, Image, Text} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Moment from "mini-moment";

import IArticle from "../interfaces/article";
import IComment from "../interfaces/comment";
import IProps from "../interfaces/props";

import commonStyles from "../assets/styles/common";
import * as utils from "../utils/utils";

import ArticleItem from "../components/articleItem";

import {fetchCommentList} from "../actions/comment";

interface Props extends IProps {
    article: IArticle;
    actions?: {
        fetchCommentList: (articleId: number, page: number) => any;
    };
    comment: {
        list: IComment[];
        page: number;
        done: boolean;
    }
}

interface State {
}

const styles = StyleSheet.create({
    head: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    back: {
        width: 50
    },
    title: {
        marginLeft: -50
    },
    item: {
    },
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
    user: {

    },
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

class ArticleDetail extends React.Component<Props, State> {

    componentDidMount() {
        const {actions, article} = this.props;
        InteractionManager.runAfterInteractions(() => {
            actions.fetchCommentList(article.id, 1);
        });
    }

    loadMoreComments() {
        const {actions, article, comment} = this.props;
        if (comment.page && !comment.done) {
            actions.fetchCommentList(article.id, comment.page + 1);
        }
    }

    renderCommentItem(comment: IComment) {
        return (
            <View style={[commonStyles.row, styles.item]}>
                <View style={[commonStyles.center, styles.left]}>
                    <Image source={{ uri: utils.getUserAvatar(comment.user) }} style={[styles.avtar]} />
                </View>
                <View style={[commonStyles.item, styles.right]}>
                    <View style={[commonStyles.row]}>
                        <View style={[commonStyles.mr_10]}>
                            <Text style={[]}>{comment.floor}楼</Text>
                        </View>
                        <View style={[styles.user]}>
                            <Text style={[styles.userText]}>{comment.user.login}</Text>
                        </View>
                    </View>
                    <View style={[commonStyles.mt_10]}>
                        <Text>{comment.content}</Text>
                    </View>
                    {comment.refer &&
                        <View style={[commonStyles.mt_10,styles.refer]}>
                            <View>
                                <Text style={[styles.userText]}>{comment.refer.user.login}</Text>
                            </View>
                            <View>
                                <Text>{comment.refer.content}</Text>
                            </View>
                        </View>
                    }
                    <View style={[commonStyles.mt_10]}>
                        <Text style={[styles.timeText]}>{Moment.fromNow(comment.created_at * 1000) }</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {

        const {article, navigator, comment} = this.props;

        const comments = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows(comment.list);

        return (
            <View style={[commonStyles.container]}>
                <View style={[commonStyles.row, styles.head]}>
                    <TouchableOpacity onPress={() => navigator.pop() } style={[commonStyles.center, styles.back]}>
                        <Text>返回</Text>
                    </TouchableOpacity>
                    <View style={[commonStyles.item, commonStyles.center, styles.title]}>
                        <Text>糗事{article.id}</Text>
                    </View>
                </View>
                <View style={[commonStyles.container]}>
                    <ListView
                        style={[]}
                        contentContainerStyle={[]}
                        initialListSize={1}
                        dataSource={comments}
                        renderHeader={()=> <ArticleItem article={article} navigator={navigator}/>}
                        renderRow={this.renderCommentItem.bind(this)} 
                        enableEmptySections={true}
                        onEndReached={() => this.loadMoreComments() }
                        onEndReachedThreshold={10}>
                    </ListView>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        comment: state.comment,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ fetchCommentList }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);