"use strict";

import {combineReducers} from "redux";

import category from "./category";
import article from "./article";
import comment from "./comment";
import user from "./user";

export default combineReducers({
    category,
    article,
    comment,
    user,
});