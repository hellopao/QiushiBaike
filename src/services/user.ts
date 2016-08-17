"use strict";

import * as qs from "qs";

import * as http from "../utils/request";

import * as config from "../constants/config";

export function getUserInfo(userId: number) {
    const uri: string = `${config.USER_SITE}/user/${userId}/detail`;

    return http.get(uri)
        .then(res => {
            return res;
        })
}

export function signin(login, pass) {
    const uri: string = `${config.API_SITE}/user/signin`;

    return http.post(uri, {login, pass})
        .then(res => {
            return res;
        })
}

export function signout() {
    
}