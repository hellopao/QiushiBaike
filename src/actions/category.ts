"use strict";

import * as actionTypes from "../constants/actionTypes";

export function switchArticleCategory(category) {
    return {
        type: actionTypes.SWITCH_ARTICLE_CATEGORY,
        category
    }
}