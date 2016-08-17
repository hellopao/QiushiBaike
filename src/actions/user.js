"use strict";
const actionTypes = require("../constants/actionTypes");
const user_1 = require("../services/user");
function fetchedUserInfo(data) {
    return {
        type: actionTypes.FETCH_USER_INFO,
        data: data
    };
}
function fetchingUserInfo(data) {
    return {
        type: actionTypes.FETCH_USER_INFO,
        data: data
    };
}
function fetchUserInfo(userId) {
    return dispatch => {
        return user_1.getUserInfo(userId)
            .then(res => {
            dispatch(fetchedUserInfo({ user: res.userdata }));
        });
    };
}
exports.fetchUserInfo = fetchUserInfo;
function resetCommentList() {
    return {
        type: actionTypes.RESET_COMMENT_LIST
    };
}
exports.resetCommentList = resetCommentList;
