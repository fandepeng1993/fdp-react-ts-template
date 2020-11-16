const proxy = require('http-proxy-middleware');
const SERVERDEV = (process.env.REACT_APP_ENV || 'dev');
const BASEURL = process.env['REACT_APP_WEBSITE_' + SERVERDEV];

module.exports = function (app) {
  app.use(
    // 非mock数据 开发环境的真实数据 !(mock) proxy
    proxy('/api/', {
        target: BASEURL,
        changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
        ws: true,                         // 是否代理 websockets
        pathRewrite: {'^/api': ''}
      }
    )
  );
};