const path = require('path');
const webpack = require('webpack');
const winston = require('winston-color');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackSynchronizableShellPlugin = require('webpack-synchronizable-shell-plugin');
const NativeScriptVueExternals = require('nativescript-vue-externals');
const NativeScriptVueTarget = require('nativescript-vue-target');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const argv = require('yargs').argv;

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  templates: path.join(__dirname, '../templates')
};

const MODE = argv.mode || 'production';
const PLATFORM = argv.platform;

module.exports = (env) => {
  const action = !env || !env.tnsAction ? 'build' : env.tnsAction;

  if (!env || (!env.android && !env.ios && !env.web)) {
    return [config('android'), config('ios', action)];
  }

  return (
    (env.android && config('android', action)) ||
    (env.ios && config('ios', action)) ||
    (env.web && config('web', action)) ||
    {}
  );
};

function config(platform, action) {
  require('./prepare')(PLATFORM, MODE);

  winston.info(`Bundling application for ${PLATFORM}...`);

  const cssLoader = ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          url: false,
          sourceMap: action === 'debug'
        }
      }
    ]
  });

  const scssLoader = ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          url: false,
          includePaths: [path.resolve(__dirname, 'node_modules')],
          sourceMap: action === 'debug'
        }
      },
      'sass-loader'
    ]
  });

  return {
    entry: `${[PATHS.src]}/app.${PLATFORM}.ts`,
    output: {
      path: `${PATHS.dist}/${PLATFORM}/${MODE}`,
      filename: `app.${PLATFORM}.js`
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: cssLoader
        },
        {
          test: /\.scss$/,
          use: scssLoader
        },
        {
          test: /\.vue$/,
          loader: platformIsNative(platform) ? 'ns-vue-loader' : 'vue-loader',
          options: {
            loaders: {
              css: cssLoader,
              scss: scssLoader,
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
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      ]
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      },
      modules: ['node_modules/tns-core-modules', 'node_modules'],
      extensions: getExtensions(platform)
    },
    externals: platformIsNative(platform) ? NativeScriptVueExternals : {},
    optimization: {
      minimizer:
        MODE === 'production'
          ? [
              new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                  compress: false,
                  ecma: 6,
                  mangle: true
                },
                sourceMap: true
              })
            ]
          : []
    },

    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        'process.build': {
          build: PLATFORM,
          platform: platform
        }
      }),
      new ExtractTextPlugin({ filename: `./assets/app.${PLATFORM}.css` }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: false
      }),
      new HtmlWebpackPlugin({
        template: `${PATHS.templates}/${PLATFORM}/index.html`,
        filename: 'index.html',
        favicon: `${PATHS.dist}/${PLATFORM}/${MODE}/favicon.ico`,
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
        scripts: [`assets/app.${PLATFORM}.js`]
      }),
      new CopyWebpackPlugin([
        {from: `templates/${PLATFORM}/assets`, context: ''},
      ]),
      new WebpackSynchronizableShellPlugin({
        onBuildEnd: {
          scripts: [
            ...(action && platformIsNative(platform)
              ? [`node launch.js ${platform} ${action}`]
              : [])
          ],
          blocking: false
        }
      })
    ],
    stats: 'errors-only',
    node: {
      http: false,
      timers: false,
      setImmediate: false,
      fs: 'empty'
    }
  };
}

function getExtensions(platform) {
  return ['js', 'css', 'scss', 'vue'].reduce((exts, ext) => {
    exts.push(`.${platform}.${ext}`);
    if (platformIsNative(platform)) exts.push(`.native.${ext}`);
    exts.push(`.${ext}`);
    return exts;
  }, []);
}

function platformIsNative(platform) {
  return ['ios', 'android', 'native'].includes(platform);
}
