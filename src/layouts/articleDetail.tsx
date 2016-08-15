"use strict";

import * as React from "react";
import {StyleSheet, Navigator, Dimensions, View, Image, Text} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import IArticle from "../interfaces/article";
import IComment from "../interfaces/comment";
import IProps from "../interfaces/props";

import commonStyles from "../assets/styles/common";

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
    }
});

class ArticleDetail extends React.Component<Props, State> {

    componentDidMount() {
        const {actions, article} = this.props;
        actions.fetchCommentList(article.id, 1);
    }
    
    render() {

        const {article, navigator} = this.props;

        return (
            <View style={[commonStyles.container]}>
                <View style={[commonStyles.row, styles.head]}>
                    <View style={[commonStyles.center, styles.back]}>
                        <Text onPress={() => navigator.pop()}>返回</Text>
                    </View>
                    <View style={[commonStyles.center]}>
                        <Text>糗事{article.id}</Text>
                    </View>
                </View>
                <View>
                    <ArticleItem article={article} navigator={navigator}/>
                </View>
                <View>
                    {this.props.comment.list.map((comment, index) => {
                        return (
                            <View key={index}>
                                <Text>{comment.content}</Text>
                            </View>
                        )
                    })}
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
        actions: bindActionCreators({ fetchCommentList}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);