"use strict";

import * as actionTypes from "../constants/actionTypes";

export default function (state = {}, action) {
    if (action.type === actionTypes.FETCH_USER_INFO) {
        const {user} = action.data;
        return Object.assign({}, state, user);
    }

    return state;
}