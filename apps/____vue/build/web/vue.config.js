const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('../base.config');

module.exports = {
  baseUrl: baseConfig.PATHS()['baseUrl'],
  outputDir: baseConfig.OUTPUT_PATH(),
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
    entry: `${baseConfig.PATHS()['app']}/app.${baseConfig.PLATFORM_BUILD_TYPE()}.ts`,
    output: {
      path: baseConfig.OUTPUT_PATH()
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${baseConfig.TEMPLATE_PATH()}/index.html`,
        filename: 'index.html',
        favicon: `${baseConfig.OUTPUT_PATH()}/favicon.ico`,
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
        scripts: [`${baseConfig.OUTPUT_PATH()}/assets/app.${baseConfig.PLATFORM_BUILD_TYPE()}.js`]
      })
    ]
  }
};
