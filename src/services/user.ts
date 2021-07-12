import axios from "@/request"
import API_CONFIG from '@/config/api.config'

/*开发环境(development)测试mockJS 和proxy 在mockjs中没有匹配到会执行proxy的请求*/
export const testProxyMock:any=(data:any):Promise<any> =>axios.get('/posts');
export const testMock:any=(data:any):Promise<any> =>axios.get('/mock/posts');

export const getLogin: any = (data: any): Promise<any> => axios.post(API_CONFIG.login, data);

export const getCurrentUser: any = (params: any): Promise<any> => axios.get(API_CONFIG.getCurrentUser);