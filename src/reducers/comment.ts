"use strict";

import * as actionTypes from "../constants/actionTypes";

export default function (state = {list: []}, action) {
    if (action.type === actionTypes.FETCH_COMMENT_LIST) {
        const {list, page} = action.data;
        const prevList = state.list;

        return Object.assign({}, state, {
            list: [...prevList, ...list],
            page,
        })
    }

    return state;
}