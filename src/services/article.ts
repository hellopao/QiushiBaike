"use strict";

import * as qs from "qs";

import * as http from "../utils/request";

import * as config from "../constants/config";

export function getArticleList(api: string, page: number, refresh) {
    var query = {page, count: config.PAGE_COUNT};
    if (refresh) {
        query['type'] = "refresh";
    }
    const uri: string = `${config.API_SITE}${api}?${qs.stringify(query)}`;

    return http.get(uri)
        .then(res => {
            return res;
        })
}