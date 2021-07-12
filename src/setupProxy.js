const proxy = require('http-proxy-middleware');
const SERVERDEV = (process.env.REACT_APP_ENV || 'dev');
const BASEURL = process.env['REACT_APP_WEBSITE_' + SERVERDEV];

/*@！！！
只有在开发模式(development)才会代理请求,production 不会代理请求 本文件不执行
*/
module.exports = function (app) {
  app.use(
    // 非mock数据 开发环境(development)的真实数据 !(mock) proxy
    proxy('/api/', {
        target: BASEURL,
        changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
        ws: true,                         // 是否代理 websockets
        pathRewrite: {'^/api': ''}
      }
    )
  );
};