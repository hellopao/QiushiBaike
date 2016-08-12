"use strict";

interface IUser {
    /**
     * 头像更新时间 
     */
    avatar_updated_at: number;
    /**
     * 用户uid
     */
    uid: number;
    /**
     * 上一次访问时间
     */
    last_visited_at: number;
    /**
     * 账号创建时间
     */
    created_at: number;
    /**
     * 账号状态
     */
    state: string;
    /**
     * 上一次访问所用设备
     */
    last_device: string;
    /**
     * 用户角色
     */
    role: string;
    /**
     * 用户名
     */
    login: string;
    /**
     * 用户id
     */
    id: number;
    /**
     * 用户头像
     */
    icon: string;
}

export default IUser;