"use strict";
const redux_1 = require("redux");
const category_1 = require("./category");
const article_1 = require("./article");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    category: category_1.default,
    article: article_1.default
});
