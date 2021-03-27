import axios from "axios";

let instance = axios.create({
    baseURL: 'http://localhost:9090',
    timeout: 2000,         // 请求超过2秒请求失败
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
    // 这里编写请求前做的事情
    return config
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
    let data = response.data;
    // 拦截服务器返回的状态码
    // 分别对不同的状态码处理不同的业务
    return data;
})

export default instance