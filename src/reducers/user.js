"use strict";
const actionTypes = require("../constants/actionTypes");
function default_1(state = {}, action) {
    if (action.type === actionTypes.FETCH_USER_INFO) {
        const { user } = action.data;
        return Object.assign({}, state, user);
    }
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
