"use strict";

import * as actionTypes from "../constants/actionTypes";
import {getArticleList} from "../services/article";

function fetchedArticleList(data) {
    return {
        type: actionTypes.FETCH_ARTICLE_LIST,
        data
    }
}

function fetchingArticleList(data) {
    return {
        type: actionTypes.FETCHING_ARTICLE_LIST,
        data
    }
}

export function fetchArticleList(category, page:number, refresh: boolean = false ) {
    return dispatch => {
        dispatch(fetchingArticleList({category,refresh}));

        return getArticleList(category.api, page, refresh)
            .then(res => {
                dispatch(fetchedArticleList({category, list: res.items, page, refresh}))
            })
    }
}