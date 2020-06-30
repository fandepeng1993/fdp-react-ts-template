const {override, fixBabelImports, addLessLoader, addWebpackPlugin, addWebpackAlias, addDecoratorsLegacy} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin'); // 减少包的体积
const path = require('path');
const theme = require('./theme');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'true'，
    style: true
  }),
  addLessLoader({
    // javascriptEnabled: true,
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        //自定义less 颜色 建议 用less文件修改，不建议在这更改
        // '@primary-color': 'red',
        ...theme
      }
    }
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  //别名配置
  addWebpackAlias({
    '@': path.join(__dirname, './src'),
    '@actions': path.join(__dirname, './src/actions'),
    '@api': path.join(__dirname, './src/api'),
    '@common': path.join(__dirname, './src/common'),
    '@components': path.join(__dirname, './src/components'),
    '@layout': path.join(__dirname, './src/layout'),
    '@pages': path.join(__dirname, './src/pages'),
    '@router': path.join(__dirname, './src/router'),
    '@store': path.join(__dirname, './src/store'),
    '@utils': path.join(__dirname, './src/utils')
  }),
  //装饰器配置项
  addDecoratorsLegacy(),
  (config) => { //暴露webpack的配置 config ,evn
    // 去掉打包生产map 文件
    // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    if (process.env.NODE_ENV === 'production') {
      config.devtool = false;
    }
    if (process.env.NODE_ENV !== 'development') {
      // console.log(config.plugins);
      //config.plugins = [...config.plugins, ...myPlugin];
    }
    //1.修改、添加loader 配置 :
    // 所有的loaders规则是在config.module.rules(数组)的第二项
    // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
    // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    loaders[5].use.push({
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, 'src/asset/base.scss')//全局引入公共的scss 文件
      }
    });


    return config;
  }
);