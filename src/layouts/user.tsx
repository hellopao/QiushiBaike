"use strict";

import * as React from "react";
import {StyleSheet, InteractionManager, Navigator, TouchableOpacity, View, Text, Image} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import commonStyles from "../assets/styles/common";

import IProps from "../interfaces/props";
import IUser from "../interfaces/user";

import * as utils from "../utils/utils";
import * as config from "../constants/config";

import {fetchUserInfo} from "../actions/user";

interface Props extends IProps {
    user: IUser;
    rawUser: IUser;
    actions?: {
        fetchUserInfo: (userId: number) => any;
    };

}

interface State {

}

const styles = StyleSheet.create({
    meta: {
    },
    top: {
    },
    back: {
        width: 50,
        height: 50
    },
    avtar: {
        width: 36,
        height: 36,
        borderRadius: 18
    },
    property: {
        height: 50,
    },
    propertyKey: {
        padding: 10,
        marginRight: 20
    },
    propertyValue: {
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
});

class User extends React.Component<Props, State> {

    componentDidMount() {
        const {actions, rawUser} = this.props;
        actions.fetchUserInfo(rawUser.id)
    }

    render() {
        const {user} = this.props;

        return (
            <View style={[commonStyles.container]}>
                <View style={[styles.meta]}>
                    <View style={[styles.top]}>
                        <TouchableOpacity onPress={() => this.props.navigator.pop() } style={[commonStyles.center,styles.back]}>
                            <Text>返回</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[commonStyles.center]}>
                        <View>
                            <Image source={{uri: utils.getUserAvatar(user)}} style={[styles.avtar]}/>
                        </View>
                        <View style={[commonStyles.row]}>
                            <Text>{user.login}</Text>
                            <View>
                                <Text>{user.age}</Text>
                            </View>
                        </View>
                        <View style={[commonStyles.row]}>
                            <View>
                                <Text>{user.astrology}</Text>
                            </View>
                            <View>
                                <Text>{config.USER_EMOTION_MAP[user.emotion]}</Text>
                            </View>
                            <View>
                                <Text>{user.haunt}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={[commonStyles.row,styles.property]}>
                        <View style={[commonStyles.center,styles.propertyKey]}>
                            <Text>故乡</Text>
                        </View>
                        <View style={[commonStyles.item,styles.propertyValue]}>
                            <Text>{user.hometown}</Text>
                        </View>
                    </View>
                    <View style={[commonStyles.row,styles.property]}>
                        <View style={[commonStyles.center,styles.propertyKey]}>
                            <Text>糗龄</Text>
                        </View>
                        <View style={[commonStyles.item,styles.propertyValue]}>
                            <Text>{utils.getQiubaiAge(user.qb_age)}</Text>
                        </View>
                    </View>
                    <View style={[commonStyles.row,styles.property]}>
                        <View style={[commonStyles.center,styles.propertyKey]}>
                            <Text>职业</Text>
                        </View>
                        <View style={[commonStyles.item,styles.propertyValue]}>
                            <Text>{user.job}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({fetchUserInfo}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);