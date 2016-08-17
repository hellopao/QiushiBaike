"use strict";

import * as React from "react";
import {StyleSheet, Navigator, View, Text, Image} from "react-native";

import * as utils from "../utils/utils";
import commonStyles from "../assets/styles/common";

import Icon from "../components/icon";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee"
    },
    item: {
        backgroundColor: "#fff"
    },
    title: {
        height: 30
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    icon: {
        width: 40
    }
});

class Account extends React.Component<any, any> {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[commonStyles.center, styles.item, styles.title]}>
                    <Text>我</Text>
                </View>
                <View style={[commonStyles.row, commonStyles.p_10,commonStyles.mt_10,styles.item]}>
                    <View style={[commonStyles.ml_10]}>
                        <Image source={{uri: utils.getUserAvatar()}} style={[styles.avatar]}/>
                    </View>
                    <View style={[commonStyles.item, commonStyles.verticalCenter]}>
                        <View>
                            <Text>登录/注册</Text>
                        </View>
                    </View>
                </View>
                <View style={[commonStyles.row,commonStyles.mt_10,styles.item]}>
                    <View style={[commonStyles.center,styles.icon]}>
                        <Icon name="posts" />
                    </View>
                    <View style={[commonStyles.item, commonStyles.verticalCenter]}>
                        <Text>管理我的糗事和动态</Text>
                    </View>
                </View>
                <View style={[commonStyles.mt_10,styles.item]}>
                    <View style={[commonStyles.row]}>
                        <View style={[commonStyles.center,styles.icon]}>
                            <Icon name="night" />
                        </View>
                        <View style={[commonStyles.item, commonStyles.verticalCenter]}>
                            <Text>夜间模式</Text>
                        </View>
                    </View>
                    <View style={[commonStyles.row]}>
                        <View style={[commonStyles.center,styles.icon]}>
                            <Icon name="setting" />
                        </View>
                        <View style={[commonStyles.item, commonStyles.verticalCenter]}>
                            <Text>设置</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Account;


