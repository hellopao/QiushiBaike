"use strict";

import * as React from "react";
import {StyleSheet, View, Text} from "react-native";

const fontMap = require('../assets/iconfonts/QiuBaiIcon.json');
const FontFamily = "QiuBaiIcon";

const getIcon = function(name) {
    return String.fromCharCode(fontMap[name]);
};

interface Props {
    name: string;
}

class Icon extends React.Component<any, any> {
    render() {
        return (
            <Text style={{fontFamily: FontFamily,fontSize:30,fontWeight: "normal", fontStyle: "normal"}} {...this.props}>
                {getIcon(this.props.name)}
            </Text>
        )
    }
}

export default Icon;