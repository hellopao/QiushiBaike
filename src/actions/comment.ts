"use strict";

import * as actionTypes from "../constants/actionTypes";
import {getCommentList} from "../services/comment";

function fetchedCommentList(data) {
    return {
        type: actionTypes.FETCH_COMMENT_LIST,
        data
    }
}

function fetchingCommentList(data) {
    return {
        type: actionTypes.FETCHING_ARTICLE_LIST,
        data
    }
}

export function fetchCommentList(articleId: number, page: number) {
    return dispatch => {

        return getCommentList(articleId, page)
            .then(res => {
                dispatch(fetchedCommentList({ list: res.items, page}))
            })
    }
}

export function resetCommentList() {
    return {
        type: actionTypes.RESET_COMMENT_LIST
    }
}
