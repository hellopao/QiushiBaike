"use strict";

export const WWW_SITE = "http://www.qiushibaike.com";

export const API_SITE = "http://m2.qiushibaike.com";

export const IMAGE_SITE = "http://pic.qiushibaike.com";

export const PAGE_COUNT = 30;

export const CATEGORIES = [
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