"use strict";
const actionTypes = require("../constants/actionTypes");
const article_1 = require("../services/article");
function fetchedArticleList(data) {
    return {
        type: actionTypes.FETCH_ARTICLE_LIST,
        data: data
    };
}
function fetchingArticleList(data) {
    return {
        type: actionTypes.FETCHING_ARTICLE_LIST,
        data: data
    };
}
function fetchArticleList(category, page, refresh = false) {
    return dispatch => {
        dispatch(fetchingArticleList({ category: category, refresh: refresh }));
        return article_1.getArticleList(category.api, page, refresh)
            .then(res => {
            dispatch(fetchedArticleList({ category: category, list: res.items, page: page, refresh: refresh }));
        });
    };
}
exports.fetchArticleList = fetchArticleList;
