"use strict";
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const common_1 = require("../assets/styles/common");
const utils = require("../utils/utils");
const config = require("../constants/config");
const user_1 = require("../actions/user");
const styles = react_native_1.StyleSheet.create({
    meta: {},
    top: {},
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
class User extends React.Component {
    componentDidMount() {
        const { actions, rawUser } = this.props;
        actions.fetchUserInfo(rawUser.id);
    }
    render() {
        const { user } = this.props;
        return (React.createElement(react_native_1.View, {style: [common_1.default.container]}, React.createElement(react_native_1.View, {style: [styles.meta]}, React.createElement(react_native_1.View, {style: [styles.top]}, React.createElement(react_native_1.TouchableOpacity, {onPress: () => this.props.navigator.pop(), style: [common_1.default.center, styles.back]}, React.createElement(react_native_1.Text, null, "返回"))), React.createElement(react_native_1.View, {style: [common_1.default.center]}, React.createElement(react_native_1.View, null, React.createElement(react_native_1.Image, {source: { uri: utils.getUserAvatar(user) }, style: [styles.avtar]})), React.createElement(react_native_1.View, {style: [common_1.default.row]}, React.createElement(react_native_1.Text, null, user.login), React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, null, user.age))), React.createElement(react_native_1.View, {style: [common_1.default.row]}, React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, null, user.astrology)), React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, null, config.USER_EMOTION_MAP[user.emotion])), React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, null, user.haunt))))), React.createElement(react_native_1.View, null, React.createElement(react_native_1.View, {style: [common_1.default.row, styles.property]}, React.createElement(react_native_1.View, {style: [common_1.default.center, styles.propertyKey]}, React.createElement(react_native_1.Text, null, "故乡")), React.createElement(react_native_1.View, {style: [common_1.default.item, styles.propertyValue]}, React.createElement(react_native_1.Text, null, user.hometown))), React.createElement(react_native_1.View, {style: [common_1.default.row, styles.property]}, React.createElement(react_native_1.View, {style: [common_1.default.center, styles.propertyKey]}, React.createElement(react_native_1.Text, null, "糗龄")), React.createElement(react_native_1.View, {style: [common_1.default.item, styles.propertyValue]}, React.createElement(react_native_1.Text, null, utils.getQiubaiAge(user.qb_age)))), React.createElement(react_native_1.View, {style: [common_1.default.row, styles.property]}, React.createElement(react_native_1.View, {style: [common_1.default.center, styles.propertyKey]}, React.createElement(react_native_1.Text, null, "职业")), React.createElement(react_native_1.View, {style: [common_1.default.item, styles.propertyValue]}, React.createElement(react_native_1.Text, null, user.job))))));
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators({ fetchUserInfo: user_1.fetchUserInfo }, dispatch)
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(User);
