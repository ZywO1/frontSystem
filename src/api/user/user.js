import request from "../request";
//登录接口
export function login(username, password) {
    return request({
        url: `/api/login`,
        method: "post",
        data: {
            username,
            password,
        },
    });
}
//获取个人信息接口
export function detailInfo() {
    return request({
        url: `/user/detailInfo`,
        method: "get",
    });
}
//修改密码
export function updatepwd(oldpwd,newpwd) {
    return request({
        url: `/user/updatepwd`,
        method: "post",
        data: {
            oldpwd,
            newpwd,
        },
    });
}