import axios from "axios";

const request = axios.create({
    baseURL: '/development',
});

request.interceptors.request.use(
    function (config) {
        //加上token
        if (localStorage.getItem('token')) {
            //请求头添加字段
            config.headers['Authorization'] = localStorage.getItem('token')
        }

        if (config.method === 'post') {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    function (response) {
        const result = {
            code: response.data.status,
            message: response.data.message,
            data: response.data.data,
            // meta: response.data.meta,
        };

        if (result.message === "用户未登录") {
            console.log('未登录')
            window.location.href = "../login";
        }
        if (![1].includes(result.code)) {
            return Promise.reject(result);
        }
        return result;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default request;
