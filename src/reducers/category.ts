"use strict";

import * as actionTypes from "../constants/actionTypes";
import {CATEGORIES} from "../constants/config";

export default function (state = CATEGORIES[0], action) {
    if (action.type === actionTypes.SWITCH_ARTICLE_CATEGORY) {
        return action.category;
    }
    return state;
}