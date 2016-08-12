"use strict";
const qs = require("qs");
const http = require("../utils/request");
const config = require("../constants/config");
function getArticleList(api, page, refresh) {
    var query = { page: page, count: config.PAGE_COUNT };
    if (refresh) {
        query['type'] = "refresh";
    }
    const uri = `${config.API_SITE}${api}?${qs.stringify(query)}`;
    return http.get(uri)
        .then(res => {
        return res;
    });
}
exports.getArticleList = getArticleList;
