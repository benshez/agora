const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, '../../../src'),
  dist: path.join(__dirname, '../../../dist'),
  templates: path.join(__dirname, '../../../templates')
};

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    app: `${[PATHS.src]}/main.web.ts`
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.jsm', 'vue'],
    alias: {
      styles: path.resolve(__dirname, '../src/styles')
    }
  },
  devtool: 'eval-sourcemap',
  module: {
    rules: [
      {
        test: /.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: 'dashes',
              localIdentName: '[path][name]__[local]'
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        use: 'file-loader'
      },
      {
        test: /.vue?$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../../templates/web/index.html'),
      title: 'Webpack 4 Demo',
      //favicon: path.resolve(__dirname, '../../../templates/web/favicon.ico'),
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
        },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0'
        }
      ],
      appMountIds: ['app'],
      inject: false,
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        preserveLineBreaks: true,
        useShortDoctype: true,
        html5: true
      },
      mobile: true,
      scripts: ['/static.js']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      // {
      //   from: path.resolve(__dirname, '../../../web/template/favicon.ico'),
      //   to: path.resolve(__dirname, '../../../dist/template/favicon.ico'),
      // }
      // {
      //   from: path.join(PATHS.src, 'favicon.ico'),
      //   to: path.join(PATHS.dist, 'favicon.ico')
      // },
      // {
      //   from: path.join(PATHS.src, 'demo/static.js'),
      //   to: path.join(PATHS.dist, 'static.js')
      // }
    ]),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      VERSION: JSON.stringify('1.2.0'),
      DEBUG: true,
      CODE_FRAGMENT: '80 + 5'
    })
  ],
  devServer: {
    contentBase: PATHS.dist,
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
  stats: {
    children: false
  }
};
