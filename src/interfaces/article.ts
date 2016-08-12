"use strict";

import IUser from "./user";

interface IArticle {
    /**
     * 糗事分类
     */
    format: string;
    /**
     * 糗事图片
     */
    image: string;
    /**
     * 糗事创建时间
     */
    published_at: number;
    /**
     * 糗事所属标签
     */
    tag: string;
    /**
     * 糗事所属用户
     */
    user: IUser;
    /**
     * 糗事图片尺寸
     */
    image_size: {
        m?: number[];
        s?: number[];
    };
    /**
     * 糗事id
     */
    id: number;
    /**
     * 糗事反馈信息
     */
    votes: {
        /**
         * 不好笑
         */
        down: number;
        /**
         * 好笑
         */
        up: number
    };
    /**
     * 糗事创建时间
     */
    created_at: number;
    /**
     * 糗事内容
     */
    content: string;
    /**
     * 糗事状态
     */
    state: string;
    /**
     * 糗事评论数量 
     */
    comments_count: number;
    /**
     * 糗事是否开放评论功能
     */
    allow_comment: boolean;
    /**
     * 糗事分享数量
     */
    share_count: number;
    /**
     * 糗事类型
     */
    type?: string;
    /**
     * 视频缩略图地址
     */
    pic_url?: string;
    /**
     * 高清视频地址 
     */
    high_url?: string;
    /**
     * 标清视频地址
     */
    low_url?: string;
}

export default IArticle;