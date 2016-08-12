"use strict";

import {WWW_SITE, IMAGE_SITE} from "../constants/config";
import IUser from "../interfaces/user";
import IArticle from "../interfaces/article";

export function getUserAvatar(user: IUser) {
    if (!user.icon) {
        return `${WWW_SITE}/static/images/thumb/anony.png`;
    }
    return `${IMAGE_SITE}/system/avtnew/${("" + user.id).replace(/\d{4}$/, '')}/${user.id}/medium/${user.icon}`;
}

export function getArticleImage(article: IArticle) {
    return `${IMAGE_SITE}/system/pictures/${("" + article.id).replace(/\d{4}$/, '')}/${article.id}/medium/${article.image}`;
}