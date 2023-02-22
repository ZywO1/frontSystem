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
export function updatepwd(oldpwd, newpwd) {
    return request({
        url: `/user/updatepwd`,
        method: "post",
        data: {
            oldpwd,
            newpwd,
        },
    });
}

//获取公告
export function getNotice() {
    return request({
        url: '/user/getReport',
        method: 'post'
    })
}

//获取课程
export function getMyLab(currentPage, pageSize) {
    return request({
        url: '/lesson/myLesson',
        method: 'post',
        data: { currentPage, pageSize }
    })
}