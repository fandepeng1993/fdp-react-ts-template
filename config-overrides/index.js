const {override, fixBabelImports, addLessLoader, addWebpackPlugin, addWebpackAlias, addDecoratorsLegacy} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin'); // 减少包的体积
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const theme = require('./theme');
const PKG = require('../package.json');
const analyze = process.env.REACT_APP_ANALYZE; //是否分析打包数据
const SERVERDEV = process.env.REACT_APP_ENV||'dev';
const BASEURL = process.env['REACT_APP_WEBSITE_'+SERVERDEV];
console.log('后端接口环境地址:'+BASEURL);
// if (!Intl.PluralRules) {
//   require('@formatjs/intl-pluralrules/polyfill');
//   require('@formatjs/intl-pluralrules/dist/locale-data/de'); // Add locale data for de
// }

if (process.env.NODE_ENV === 'production') process.env.GENERATE_SOURCEMAP = 'false';
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
      // modules: {localIdentName: '[name]_[local]_[hash:base64:8]'},
      // localIdentName: '[local]--[hash:base64:3]',
      modifyVars: {
        //自定义less 颜色 建议 用less文件修改，不建议在这更改
        // '@primary-color': 'red',
        ...theme
      }
    }
  }),
  // Day.js 替换 moment.js
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackPlugin(new webpack.DefinePlugin({
    BASEURL: JSON.stringify(BASEURL),
  })),
  analyze && addWebpackPlugin(new BundleAnalyzerPlugin()),
  //别名配置
  addWebpackAlias({
    '@': path.join(__dirname, '../src')
  }),
  //装饰器配置项
  addDecoratorsLegacy(),
  (config) => { //暴露webpack的配置 config ,evn
    // 去掉打包生产map 文件
    // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;

    const paths = require('react-scripts/config/paths');
    // 配置打包目录输出到dist/PKG.name
    paths.appBuild = path.join(path.dirname(paths.appBuild), `dist/${PKG.name}`);
    config.output.path = paths.appBuild;
    /* paths.publicUrlOrPath = './';
    config.output.publicPath = './'; */

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
    // const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    // loaders[5].use.push({
    //   loader: 'sass-resources-loader',
    //   options: {
    //     // resources: path.resolve(__dirname, 'src/asset/base.scss')//全局引入公共的scss 文件
    //   }
    // });
    return config;
  }
);