"use strict";

import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducers from "../reducers/";

export default function(initialState = {}) {
    return applyMiddleware(thunkMiddleware)(createStore)(rootReducers,initialState)
}