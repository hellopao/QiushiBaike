"use strict";
const actionTypes = require("../constants/actionTypes");
function default_1(state = { list: [] }, action) {
    if (action.type === actionTypes.FETCH_COMMENT_LIST) {
        const { list, page } = action.data;
        const prevList = state.list;
        return Object.assign({}, state, {
            list: [...prevList, ...list],
            page: page,
        });
    }
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
