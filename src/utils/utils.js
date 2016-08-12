"use strict";
const config_1 = require("../constants/config");
function getUserAvatar(user) {
    if (!user.icon) {
        return `${config_1.WWW_SITE}/static/images/thumb/anony.png`;
    }
    return `${config_1.IMAGE_SITE}/system/avtnew/${("" + user.id).replace(/\d{4}$/, '')}/${user.id}/medium/${user.icon}`;
}
exports.getUserAvatar = getUserAvatar;
function getArticleImage(article) {
    return `${config_1.IMAGE_SITE}/system/pictures/${("" + article.id).replace(/\d{4}$/, '')}/${article.id}/medium/${article.image}`;
}
exports.getArticleImage = getArticleImage;
