"use strict";

import * as React from "react";
import {StyleSheet, Navigator, Dimensions, View, Image, Text} from "react-native";
import {bindActionCreators} from "redux";

import IArticle from "../interfaces/article";
import IComment from "../interfaces/comment";
import IProps from "../interfaces/props";

import commonStyles from "../assets/styles/common";

import ArticleItem from "../components/articleItem";

interface Props extends IProps {
    article: IArticle
}

interface State {

}

const styles = StyleSheet.create({

});

class ArticleDetail extends React.Component<Props, State> {
    
    render() {

        const {article, navigator} = this.props;

        return (
            <View>
                <View style={[commonStyles.row]}>
                    <View>
                        <Text onPress={() => navigator.pop()}>返回</Text>
                    </View>
                    <View style={[]}>
                        <Text>糗事{article.id}</Text>
                    </View>
                </View>
                <View>
                    <ArticleItem article={article} navigator={navigator}/>
                </View>
                <View>
                </View>
            </View>
        )
    }
}

export default ArticleDetail;