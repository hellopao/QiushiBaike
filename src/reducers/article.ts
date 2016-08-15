"use strict";

import * as actionTypes from "../constants/actionTypes";

export default function (state = {}, action) {
    if (action.type === actionTypes.FETCH_ARTICLE_LIST) {
        const {category, list, page, refresh} = action.data;
        var prevList = (state[category.name] || {}).list || [];

        if (refresh) {
            prevList = [];
        }
        return Object.assign({}, state, {
            [category.name]: {
                list: [...prevList, ...list],
                page,
                refreshing: false
            }
        })
    }

    if (action.type === actionTypes.FETCHING_ARTICLE_LIST) {
        const {category, refresh} = action.data;
        const article = Object.assign({}, state[category.name], {
            refreshing: refresh
        });
        return Object.assign({}, state, {
            [category.name]: article
        })
    }
    return state;
}