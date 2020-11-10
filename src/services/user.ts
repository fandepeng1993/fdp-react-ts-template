import axios from "@/request"

export const getUserInfo: any = (params: any): Promise<any> => axios.get(`/user/userInfo`, {params});