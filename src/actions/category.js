"use strict";
const actionTypes = require("../constants/actionTypes");
function switchArticleCategory(category) {
    return {
        type: actionTypes.SWITCH_ARTICLE_CATEGORY,
        category: category
    };
}
exports.switchArticleCategory = switchArticleCategory;
