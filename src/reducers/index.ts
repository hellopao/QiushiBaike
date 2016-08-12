"use strict";

import {combineReducers} from "redux";

import category from "./category";
import article from "./article";

export default combineReducers({
    category,
    article
});