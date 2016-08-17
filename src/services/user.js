"use strict";
const http = require("../utils/request");
const config = require("../constants/config");
function getUserInfo(userId) {
    const uri = `${config.USER_SITE}/user/${userId}/detail`;
    return http.get(uri)
        .then(res => {
        return res;
    });
}
exports.getUserInfo = getUserInfo;
function signin(login, pass) {
    const uri = `${config.API_SITE}/user/signin`;
    return http.post(uri, { login: login, pass: pass })
        .then(res => {
        return res;
    });
}
exports.signin = signin;
function signout() {
}
exports.signout = signout;
