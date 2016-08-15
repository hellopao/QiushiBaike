"use strict";
const qs = require("qs");
const http = require("../utils/request");
const config = require("../constants/config");
function getCommentList(articleId, page) {
    var query = { page: page, count: config.PAGE_COUNT, article: 0 };
    const uri = `${config.API_SITE}/article/${articleId}/latest/comments?${qs.stringify(query)}`;
    return http.get(uri)
        .then(res => {
        return res;
    });
}
exports.getCommentList = getCommentList;
