"use strict";
const actionTypes = require("../constants/actionTypes");
const config_1 = require("../constants/config");
function default_1(state = config_1.CATEGORIES[0], action) {
    if (action.type === actionTypes.SWITCH_ARTICLE_CATEGORY) {
        return action.category;
    }
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
