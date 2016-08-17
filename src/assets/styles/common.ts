"use strict";

import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {flex: 1},
    item: {flex: 1},
    row: {flexDirection: "row"},
    center: {justifyContent: "center", alignItems: "center"},
    horizonCenter: {
        alignItems: "center"
    },
    verticalCenter: {
        justifyContent: "center"
    },
    m_10: {
        margin: 10
    },
    mt_10: {
        marginTop: 10
    },
    ml_10: {
        marginLeft: 10
    },
    mr_10: {
        marginRight: 10
    },
    p_10: {
        padding: 10
    }
});

export default styles;