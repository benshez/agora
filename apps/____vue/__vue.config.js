const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./build/base.config');

baseConfig.REPORT('info', `Building ${baseConfig.ENVIRONMENT()} environment for ${baseConfig.PLATFORM()} platform`);

module.exports = {
  baseUrl: baseConfig.PATHS()['baseUrl'],
  outputDir: path.resolve(__dirname, baseConfig.OUTPUT_PATH()),
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
          url: false,
          includePaths: baseConfig.PATHS()['nodeModules'],
          sourceMap: true
        })
      );
  },
  configureWebpack: {
    entry: `${baseConfig.PATHS()['app']}/main.${baseConfig.PLATFORM_BUILD_TYPE()}.ts`,
    output: {
      path: path.resolve(__dirname, baseConfig.OUTPUT_PATH()),
      filename: '[name].js',
      //publicPath: path.resolve(__dirname, baseConfig.PATHS()['baseUrl']),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${baseConfig.TEMPLATE_PATH()}/index.html`,
        filename: 'index.html',
        favicon: `${baseConfig.TEMPLATE_PATH()}/favicon.ico`,
        title: 'App',
        meta: [
          {
            name: 'robots',
            content: 'noindex,nofollow'
          },
          {
            name: 'description',
            content: ''
          },
          {
            name: 'keywords',
            content: 'webpack,webpack-4,webpack.config.js,html5,es6+,react,sass'
          }
        ],
        appMountIds: ['app'],
        inject: true,
        minify: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          preserveLineBreaks: true,
          useShortDoctype: true,
          html5: true
        },
        mobile: true,
        scripts: [`${baseConfig.OUTPUT_PATH()}/assets/main.${baseConfig.PLATFORM_BUILD_TYPE()}.js`]
      })
    ]
  }
};
