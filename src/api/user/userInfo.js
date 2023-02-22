import request from "../request";

//获取用户列表
export function getUserList(pageSize, currentPage, identify, username, name, className) {
    return request({
        url: `/user/getUserList`,
        method: "post",
        data: { pageSize, currentPage, identify, username, name, className },
    });
}