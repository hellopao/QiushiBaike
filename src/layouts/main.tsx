"use strict";

import * as React from "react";
import {StyleSheet, Navigator, View, Text} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
//import {createIconSet} from 'react-native-vector-icons';

import ArticleList from "../containers/articleList";
import Message from "../containers/message";
import Account from "../containers/account";

// const glyphMap = require('../assets/iconfonts/QiuBaiIcon.json');
// const Icon = createIconSet(glyphMap, 'QiuBaiIcon');
import Icon from "../components/icon";

interface Props {
}

interface State {
    currentTab?: string;
}

class Main extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: "articles"
        };
    }

    switchTab(currentTab: string) {
        this.setState({currentTab});
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.currentTab === 'articles'}
                    title="糗事"
                    renderIcon={() => <Icon name="shit" size={20} color="#fff" />}
                    renderSelectedIcon={() => <Icon name="shit" size={20} color="#808080"/>}
                    onPress={() => this.switchTab('articles') }>
                    <ArticleList {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.currentTab === 'message'}
                    renderIcon={() => <Icon name="message" size={20} color="#fff" />}
                    renderSelectedIcon={() => <Icon name="message" size={20} color="#808080"/>}
                    title="小纸条"
                    onPress={() => this.switchTab('message')}>
                    <Message />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.currentTab === 'account'}
                    renderIcon={() => <Icon name="account" size={20} color="#fff" />}
                    renderSelectedIcon={() => <Icon name="account" size={20} color="#808080"/>}
                    title="个人"
                    onPress={() => this.switchTab('account')}>
                    <Account />
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

export default Main;


