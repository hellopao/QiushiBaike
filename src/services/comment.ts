"use strict";

import * as qs from "qs";

import * as http from "../utils/request";

import * as config from "../constants/config";

export function getCommentList(articleId: number, page: number) {
    var query = {page, count: config.PAGE_COUNT, article: 0};
    const uri: string = `${config.API_SITE}/article/${articleId}/latest/comments?${qs.stringify(query)}`;

    return http.get(uri)
        .then(res => {
            return res;
        })
}