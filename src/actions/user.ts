"use strict";

import * as actionTypes from "../constants/actionTypes";
import {getUserInfo} from "../services/user";

function fetchedUserInfo(data) {
    return {
        type: actionTypes.FETCH_USER_INFO,
        data
    }
}

function fetchingUserInfo(data) {
    return {
        type: actionTypes.FETCH_USER_INFO,
        data
    }
}

export function fetchUserInfo(userId: number) {
    return dispatch => {
        return getUserInfo(userId)
            .then(res => {
                dispatch(fetchedUserInfo({ user: res.userdata}))
            })
    }
}

export function resetCommentList() {
    return {
        type: actionTypes.RESET_COMMENT_LIST
    }
}
