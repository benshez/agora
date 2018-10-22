const { resolve, sep, join } = require('path');
const { platformWeb, Utilities } = require('../utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

const platform = platformWeb();
const projectRoot = resolve(__dirname, '../..');
const appFullPath = resolve(projectRoot, 'app');

const utils = new Utilities(platform);

const dist = resolve(projectRoot, `platforms${sep}${utils.getResourcePlatformDirectory()}`);

const appResourcesFullPath = resolve(
  appFullPath,
  `App_Resources${sep}${utils.getResourcePlatformDirectory()}`
);

utils.report('info', `Starting ${utils.getMode()} build process for ${platformWeb()}`);

const config = {
  /**
   * You can use these too for bigger projects. For now it is 0 conf mode for me!
   */
  entry: {
    build: join(appFullPath, 'main.web.ts')
    //vendor: join(appFullPath, 'vendor.js'),
  },
  output: {
    path: dist,
    filename: '[name].js'
  },
  resolve: {
    extensions: utils.getExtensions(), //['.vue', '.js', '.scss', '.css'],
    alias: {
      '~': appFullPath,
      '@': appFullPath,
      assets: resolve(appFullPath, 'assets'),
      components: resolve(appFullPath, 'components'),
      views: resolve(appFullPath, 'views'),
      modules: resolve(appFullPath, 'modules'),
      vue: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: utils.getLoaders().css
      },
      {
        test: /\.scss$/,
        use: utils.getLoaders().scss
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: utils.getLoaders().css,
            scss: utils.getLoaders().scss,
            ts: utils.getLoaders().ts
          }
        }
      },
      {
        test: /\.ts?$/,
        use: utils.getLoaders().ts
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(utils.globalVariables()),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    }),
    new HtmlWebpackPlugin({
      template: resolve(appResourcesFullPath, 'index.html'),
      title: utils.getAppName(),
      favicon: resolve(appResourcesFullPath, 'favicon.ico'),
      meta: [
        {
          name: 'robots',
          content: 'noindex,nofollow'
        },
        {
          name: 'description',
          content: 'Webpack 4 demo using ES6, React, SASS'
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
      alwaysWriteToDisk: true,
      scripts: []
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true,
    contentBase: './public',
    inline: true
  },
};

utils.report('info', `config for ${platformWeb()} is ${JSON.stringify(config)}`);

module.exports = config;
