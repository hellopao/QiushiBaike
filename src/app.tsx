"use strict";

import * as React from "react";
import {StyleSheet, Navigator, View, Text} from "react-native";
import {Provider} from "react-redux";

import configureStore from "./store/";
import Main from "./layouts/main";

class App extends React.Component<any, any> {
    
    navigator: Navigator;

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    configureScene() {
        return Object.assign({}, Navigator.SceneConfigs.HorizontalSwipeJump,{gestures: {pop: null}});
    }

    renderScene(route, navigator) {
        const Component = route.component;
        return (
            <Component {...route.props} navigator={navigator}/>
        )
    }

    render() {
        return (
            <Provider store={configureStore()}>
                <Navigator
                    ref={navigator => { this.navigator = navigator } }
                    initialRoute={{ name: "Main", component: Main }}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}>
                </Navigator>
            </Provider>
        )
    }
}

export default App;