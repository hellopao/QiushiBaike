"use strict";
const actionTypes = require("../constants/actionTypes");
const comment_1 = require("../services/comment");
function fetchedCommentList(data) {
    return {
        type: actionTypes.FETCH_COMMENT_LIST,
        data: data
    };
}
function fetchingCommentList(data) {
    return {
        type: actionTypes.FETCHING_ARTICLE_LIST,
        data: data
    };
}
function fetchCommentList(articleId, page) {
    return dispatch => {
        return comment_1.getCommentList(articleId, page)
            .then(res => {
            dispatch(fetchedCommentList({ list: res.items, page: page }));
        });
    };
}
exports.fetchCommentList = fetchCommentList;
