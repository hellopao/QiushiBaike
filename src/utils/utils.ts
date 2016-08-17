"use strict";

import {WWW_SITE, IMAGE_SITE} from "../constants/config";
import IUser from "../interfaces/user";
import IArticle from "../interfaces/article";

export function getUserAvatar(user?: IUser) {
    if (!user || !user.icon) {
        return `${WWW_SITE}/static/images/thumb/anony.png`;
    }
    return `${IMAGE_SITE}/system/avtnew/${("" + user.id).replace(/\d{4}$/, '')}/${user.id}/medium/${user.icon}`;
}

export function getArticleImage(article: IArticle) {
    return `${IMAGE_SITE}/system/pictures/${("" + article.id).replace(/\d{4}$/, '')}/${article.id}/medium/${article.image}`;
}

export function getQiubaiAge(qbAge: number) {
    var year = Math.ceil(qbAge / 365);
    if (year > 1) {
        return `${year}年`;
    } else {
        let month = Math.ceil(qbAge / 30);
        if (month > 1) {
            return `${month}月`
        }
        return `${qbAge}天`;
    }
}