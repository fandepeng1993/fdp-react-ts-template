// 使用 Mock
/* 使用mock注意事项： rurl 必须和axios拦截器的开发环境中的baseURL一致 例如 baseURL开发环境上/api，则mock的rurl则必须是/api开头的 */
import Mock from 'mockjs';
import {getToken} from '@/utils/cookie';

Mock.setup({
  timeout: '200-600'
});
// /api/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
Mock.mock('/api/mock/login', 'post', (options) => {
  const {body} = options;
  const {username, password} = JSON.parse(body);
  if (username === 'admin' && password === 'admin123') {
    return Mock.mock({
      data: {
        'token': '@guid',
        'id|+1': 1, 						//数字从1开始，后续依次加1
        'name': 'admin',			//名字为随机中文名
        'age|18-28': 25, 			//年龄是18-28之间的随机数
        'sex|1': ['男', '女'],	 //性别是数组里的随机一项
        'job|1': ['web', 'teacher', 'python', 'php']   //job是数组里的随机一项
      }
    });
  } else {
    return Mock.mock({
      'err': 'err'
    });
  }

});
Mock.mock('/api/mock/getCurrentUser', 'get', (option) => {
  const token = getToken();
  if(token){
    return Mock.mock({
      // /api/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
      data: {   			//生成四个如下格式的数据
        'id|+1': 1, 						//数字从1开始，后续依次加1
        'name': 'admin',			//名字为随机中文名
        'age|18-28': 25, 			//年龄是18-28之间的随机数
        'sex|1': ['男', '女'],	 //性别是数组里的随机一项
        'job|1': ['web', 'teacher', 'python', 'php']   //job是数组里的随机一项
      }
    });
  }else {
    return Mock.mock({
      'err': 'err'
    });
  }

});