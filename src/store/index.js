"use strict";
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const _1 = require("../reducers/");
function default_1(initialState = {}) {
    return redux_1.applyMiddleware(redux_thunk_1.default)(redux_1.createStore)(_1.default, initialState);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
