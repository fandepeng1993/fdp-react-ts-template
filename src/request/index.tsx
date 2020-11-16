import axios from 'axios'
import NProgress from 'nprogress'
import {getToken, removeToken} from '@/utils/cookie'

declare var BASEURL: any;
// 表示跨域请求时是否需要使用凭证
// 开启withCredentials后，服务器才能拿到cookie，当然后端服务器也要设置允许你获取你开启了才有用
// 允许axios携带cookie
axios.defaults.withCredentials = false;
// 自定义配置axios
NProgress.configure({showSpinner: false});
const axiosInstance = axios.create({
    // 基准请求地址url
    /*⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️*/
    // 1.proxy代理只在开发dev生效，mockjs数据用的。开发环境的baseURL为 /api/开头，由于开了proxy所以出现代理将/api/过滤掉
    // 2.其他环境下多环境打包。则根据环境变量数据配置基准baseURL，mock 和 proxy 失效
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : BASEURL,
    /*⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️*/
    // 网络请求时间
    timeout: 15 * 1000,
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    NProgress.start(); // 设置加载进度条(开始..)
    // 获取用户信息token
    const token = getToken();
    config.headers['Authorization'] = token;
    //增加接口时间戳 防止缓存 get请求
    // config.params = {
    //     _t: Date.parse(new Date() as any)/1000,
    //     ...config.params
    // }
    return config;
}, function (error) {
    // 设置加载进度条(结束..)
    NProgress.done();
    // 对请求错误做些什么
    return Promise.reject(error)
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    NProgress.done(); // 设置加载进度条(结束..)
    // 对响应数据做点什么
    const {code} = response.data;
    if (code === 401) {
        // 设置为未登录状态 移除用户信息 刷新页面
        removeToken();
        window.location.reload()
    }
    return Promise.resolve(response.data)
}, function (error) {
    NProgress.done(); // 设置加载进度条(结束..)
    // 对响应错误做点什么
    return Promise.reject(error)
});

export default axiosInstance;