"use strict";
const actionTypes = require("../constants/actionTypes");
function default_1(state = {}, action) {
    if (action.type === actionTypes.FETCH_ARTICLE_LIST) {
        const { category, list, page, refresh } = action.data;
        var prevList = (state[category.name] || {}).list || [];
        if (refresh) {
            prevList = [];
        }
        return Object.assign({}, state, {
            [category.name]: {
                list: [...prevList, ...list],
                page: page,
                refreshing: false
            }
        });
    }
    if (action.type === actionTypes.FETCHING_ARTICLE_LIST) {
        const { category, refresh } = action.data;
        return Object.assign({}, state, {
            [category.name]: {
                refreshing: refresh
            }
        });
    }
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
