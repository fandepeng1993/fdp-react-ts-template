import axios from 'axios'
import NProgress from 'nprogress'
import {getToken, removeToken} from '@/utils/cookie'
import env from './env';
// 表示跨域请求时是否需要使用凭证
// 开启withCredentials后，服务器才能拿到cookie，当然后端服务器也要设置允许你获取你开启了才有用
// 允许axios携带cookie
axios.defaults.withCredentials = false;
// 自定义配置axios
NProgress.configure({showSpinner: false});
const axiosInstance = axios.create({
    // 基准url
    // @ts-ignore
    baseURL: env[process.env.REACT_APP_ENV || 'dev'],
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
    const { code } = response.data;
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