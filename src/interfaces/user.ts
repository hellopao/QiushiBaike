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
     * 上一次访问所用设备系统型号
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
    /**
     * 用户年龄
     */
    age?: number;
    /**
     * 用户星座
     */
    astrology?: string;
    /**
     * 用户背景图序号
     */
    bg?: number;
    /**
     * 用户背景图
     */
    big_cover?: string;
    /**
     * 用户婚姻状况
     */
    emotion?: string;
    /**
     * 用户姓名
     */
    gender?: string;
    /**
     * 用户常住地址
     */
    haunt?: string;
    /**
     * 用户业余爱好
     */
    hobby?: string;
    /**
     * 用户家乡
     */
    hometown?: string;
    /**
     * 用户介绍
     */
    introduce?: string;
    /**
     * 用户职业
     */
    job?:string;
    /**
     * 用户所在地
     */
    location?: string;
    /**
     * 用户手机品牌
     */
    mobile_brand?: string;
    /**
     * 用户糗龄(天数)
     */
    qb_age?: number;
    /**
     * 用户糗事数量
     */
    qs_cnt?: number;
    /**
     * 用户与我的关系 
     */
    relationship?: string;
    /**
     * 用户签名
     */
    signature?: string;
    /**
     * 用户收获笑脸数量
     */
    smile_cnt?: number;
}

export default IUser;