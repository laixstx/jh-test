// ref: https://umijs.org/config/
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

export default {
  treeShaking: true,
  //extends: ['eslint:recommended'],
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        // dynamicImport: {
        //   webpackChunkName: true,
        //   level: 3,
        // }
      },
    ]
  ],

  // base: '/',
  publicPath: './',
  manifest: {
    basePath: '/',
  },
  ignoreMomentLocale: true,
  disableRedirectHoist: true,
  history: 'hash',
  hash: true,
  targets: {
    ie: 11,
  },

  chainWebpack(config) {
    config.plugin('day').use(AntdDayjsWebpackPlugin);
    // Interact with entry points
    //   .entry('login')
    //   .add(require('path').resolve(__dirname, 'src/pages/User/Login.js'))

    // 设置 alias
    // console.log(require('path').join(__dirname, '../beast-utils/dist/beast.esm.js'))
    config.resolve.alias.set('beast-utils', require('path').join(__dirname, '../beast-utils'));
    config.resolve.alias.set('beast-lib', require('path').join(__dirname, '../beast-lib'));

    // // 删除进度条插件
    // config.plugins.delete('progress');
  },
};

