"use strict";

import * as React from "react";
import {StyleSheet, Navigator, View, Text} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
import * as Icon from 'react-native-vector-icons/FontAwesome';

import ArticleList from "../containers/articleList";
import Message from "../containers/message";
import Account from "../containers/account";

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
                    renderIcon={() => <Icon name="rocket" size={20} color="#900" />}
                    renderSelectedIcon={() => <Icon name="rocket" size={20} color="#900"/>}
                    onPress={() => this.switchTab('articles') }>
                    <ArticleList {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.currentTab === 'message'}
                    title="小纸条"
                    onPress={() => this.switchTab('message')}>
                    <Message />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.currentTab === 'account'}
                    title="个人"
                    onPress={() => this.switchTab('account')}>
                    <Account />
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

export default Main;


