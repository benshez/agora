'use strict';
const WebpackSynchronizableShellPlugin = require('webpack-synchronizable-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NativeScriptVueTarget = require('nativescript-vue-target');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const TARGET = process.env.NODE_ENV;
const PLATFORM = process.env.PLATFORM;
const ACTION = process.env.ACTION;

const PATHS = {
  src: path.join(__dirname, '../../src'),
  dist: path.join(__dirname, '../../dist'),
  templates: path.join(__dirname, '../../templates')
};

function platformIsNative() {
  return ['native'].includes(PLATFORM);
}

function getExtensions() {
  return ['js', 'css', 'scss', 'vue'].reduce((exts, ext) => {
    exts.push(`.${PLATFORM}.${ext}`);
    if (platformIsNative(PLATFORM)) exts.push(`.native.${ext}`);
    exts.push(`.${ext}`);
    return exts;
  }, []);
}

function getBuildType() {
  return platformIsNative() ? 'native' : 'web';
}

require('../prepare')(getBuildType());

module.exports = {
  target: getBuildType() === 'native' ? NativeScriptVueTarget : 'web',
  entry: `${[PATHS.src]}/app.${PLATFORM}.ts`,
  output: {
    filename: `app.${PLATFORM}.js`,
    path: `${PATHS.dist}/${PLATFORM}/${TARGET}`
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.vue$/,
        loader: platformIsNative() ? 'ns-vue-loader' : 'vue-loader',
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
            sass: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ],
            ts: [
              {
                loader: 'ts-loader',
                options: {
                  appendTsSuffixTo: [/\.vue$/]
                }
              }
            ]
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
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
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: getExtensions()
  },
  performance: {
    hints: false
  },
  devServer: {
    contentBase: `${PATHS.dist}/${PLATFORM}/${TARGET}`,
    compress: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    },
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8080,
    publicPath: 'http://localhost:8080/',
    hot: true
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: `${PATHS.templates}/${PLATFORM}/index.html`,
    //   title: 'Webpack 4 Demo',
    //   meta: [
    //     {
    //       name: 'robots',
    //       content: 'noindex,nofollow'
    //     },
    //     {
    //       name: 'description',
    //       content: ''
    //     },
    //     {
    //       name: 'keywords',
    //       content: 'webpack,webpack-4,webpack.config.js,html5,es6+,react,sass'
    //     }
    //   ],
    //   appMountIds: ['app'],
    //   inject: false,
    //   minify: {
    //     collapseWhitespace: true,
    //     conservativeCollapse: true,
    //     preserveLineBreaks: true,
    //     useShortDoctype: true,
    //     html5: true
    //   },
    //   mobile: true,
    //   scripts: ['/static.js']
    // }),
    // new CopyWebpackPlugin(
    //   [
    //     {
    //       from: `${PATHS.templates}/${PLATFORM}/**/*`,
    //       to: `${PATHS.dist}/${PLATFORM}/${TARGET}/`,
    //       force: true
    //     }
    //   ],
    //   { debug: 'debug' }
    // ),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      VERSION: JSON.stringify('1.2.0'),
      DEBUG: true,
      CODE_FRAGMENT: '80 + 5'
    }),
    new WebpackSynchronizableShellPlugin({
      onBuildEnd: {
        scripts: [
          ... ACTION && platformIsNative() ? [`node launch.js ${PLATFORM} ${ACTION}`] : [],
        ],
        blocking: false,
      },
    }),
  ],
  stats: {
    children: false
  },
  devtool: '#eval-source-map'
};
