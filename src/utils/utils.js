"use strict";
const config_1 = require("../constants/config");
function getUserAvatar(user) {
    if (!user || !user.icon) {
        return `${config_1.WWW_SITE}/static/images/thumb/anony.png`;
    }
    return `${config_1.IMAGE_SITE}/system/avtnew/${("" + user.id).replace(/\d{4}$/, '')}/${user.id}/medium/${user.icon}`;
}
exports.getUserAvatar = getUserAvatar;
function getArticleImage(article) {
    return `${config_1.IMAGE_SITE}/system/pictures/${("" + article.id).replace(/\d{4}$/, '')}/${article.id}/medium/${article.image}`;
}
exports.getArticleImage = getArticleImage;
function getQiubaiAge(qbAge) {
    var year = Math.ceil(qbAge / 365);
    if (year > 1) {
        return `${year}年`;
    }
    else {
        let month = Math.ceil(qbAge / 30);
        if (month > 1) {
            return `${month}月`;
        }
        return `${qbAge}天`;
    }
}
exports.getQiubaiAge = getQiubaiAge;
