"use strict";
const actionTypes = require("../constants/actionTypes");
const config_1 = require("../constants/config");
function default_1(state = { list: [] }, action) {
    if (action.type === actionTypes.FETCH_COMMENT_LIST) {
        const { list, page } = action.data;
        const prevList = state.list;
        return Object.assign({}, state, {
            list: [...prevList, ...list],
            page: page,
            done: list.length < config_1.PAGE_COUNT
        });
    }
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
