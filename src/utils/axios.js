import axios from 'axios'

// 后端接口
const ConfigBaseURL = 'http://localhost:9999';

// 让ajax携带cookie（自动携带本地所有cookie）
axios.defaults.withCredentials = true;
// 使用create方法创建axios实例
const service = axios.create({
    baseURL: ConfigBaseURL, // 1.设置默认地址
    timeout: 7000 // 2. 请求超时时间
})

// 3.给POST请求添加请求头设置（不同项目，值不一样）
service.defaults.headers.post['Content-Type'] = 'applicatiion/json;charset=UTF-8'

// 4.1 添加请求拦截器
service.interceptors.request.use(config =>{
    return config
})

// 4.2 添加响应拦截器
service.interceptors.response.use(response =>{
    console.log("axios 的响应拦截")
    return response
}, error => {
    return Promise.reject(error)
})

export default service;