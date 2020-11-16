import axios from "@/request"
import API_CONFIG from '@/config/api.config'

export const getLogin: any = (data: any): Promise<any> => axios.post(API_CONFIG.login, data);

export const getCurrentUser: any = (params: any): Promise<any> => axios.get(API_CONFIG.getCurrentUser);