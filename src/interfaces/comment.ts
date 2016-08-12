"use strict";

import IUser from "./user";

interface IComment {
    /**
     * 评论内容
     */
    content: string;
    /**
     * 评论所属糗事id
     */
    parent_id: number
    /**
     * 是否点赞
     */
    liked: boolean;
    /**
     * 点赞数量
     */
    like_count: number
    at_infos: IComment;
    /**
     * 评论楼层
     */
    floor: number;
    /**
     * 评论创建时间
     */
    created_at: number;
    /**
     * 评论id
     */
    id: number;
    refer?: IComment;
    /**
     * 评论所属用户
     */
    user: IUser;
}

export default IComment;