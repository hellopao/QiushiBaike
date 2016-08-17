"use strict";
exports.WWW_SITE = "http://www.qiushibaike.com";
exports.API_SITE = "http://m2.qiushibaike.com";
exports.IMAGE_SITE = "http://pic.qiushibaike.com";
exports.USER_SITE = "http://nearby.qiushibaike.com";
exports.ARTICLE_PAGE_COUNT = 30;
exports.COMMENT_PAGE_COUNT = 50;
exports.CATEGORIES = [
    {
        name: "exclusive",
        text: "专享",
        api: "/article/list/suggest"
    }, {
        name: "video",
        text: "视频",
        api: "/article/list/video"
    }, {
        name: "text",
        text: "纯文",
        api: "/article/list/text"
    }, {
        name: "pic",
        text: "纯图",
        api: "/article/list/imgrank"
    }, {
        name: "essence",
        text: "精华",
        api: "/article/list/day"
    }, {
        name: "history",
        text: "穿越",
        api: "/article/history"
    }
];
exports.USER_EMOTION_MAP = {
    "married": "已婚",
    "inlove": "恋爱中",
    "single": "单身",
    "secret": "保密"
};
