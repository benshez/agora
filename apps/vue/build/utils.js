'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const winston = require('winston-color');
const argv = require('yargs').argv;

const platformIos = () => {
  return 'ios';
};

const platfromAndroid = () => {
  return 'android';
};

const platformsNative = () => {
  return [platformIos(), platfromAndroid()];
};

const platformNative = (env) => {
  return env && ((env.android && platfromAndroid()) || (env.ios && platformIos()));
};

const platformWeb = () => {
  return 'web';
};

const extentions = ['vue', 'js', 'ts', 'css', 'scss'];
const loaders = ['nativescript-dev-webpack/style-hot-loader', 'css-hot-loader'];
const cssLoaderOption = { loader: 'css-loader', options: { minimize: false, url: false } };

class Utilities {

  constructor(platform) {
    this.platform = platform;
  }

  getAppName () {
    return 'Agora';
  }

  getMode () {
    return argv.mode;
  }

  getPlatformIsNative () {
    return [platformIos(), platfromAndroid()].includes(this.platform);
  }

  getPlatformSpecificCssLoader () {
    return (this.getPlatformIsNative()) ? loaders.join(', ') : loaders[1];
  }

  getExtensions () {
    return extentions.reduce((exts, ext) => {
      exts.push(`.${this.platform}.${ext}`);
      if (this.getPlatformIsNative()) exts.push(`.native.${ext}`);
      exts.push(`.${ext}`);
      return exts;
    }, []);
  }

  getLoaders () {
    return {
      scss: [
        this.getPlatformSpecificCssLoader(),
        MiniCssExtractPlugin.loader,
        cssLoaderOption,
        'sass-loader'
      ],
      css: [
        this.getPlatformSpecificCssLoader(),
        MiniCssExtractPlugin.loader,
        cssLoaderOption
      ],
      ts: [
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      ]
    };
  }

  getResourcePlatformDirectory () {
    let directory = '';

    switch (this.platform) {
      case platformWeb():
        directory = 'Web';
        break;
      case platfromAndroid():
        directory = 'Android';
        break;
      case platformIos():
        directory = 'iOS';
        break;
    }

    return directory;
  }

  report (reportType = 'info', message = '') {
    let msg = '';

    switch (reportType) {
      case 'info':
        msg = winston.info(message);
        break;
      case 'error':
        msg = winston.error(message);
        break;
    }

    return msg;
  }

  globalVariables () {
    return {
      'global.TNS_WEBPACK': (this.getPlatformIsNative()) ? 'true' : 'false',
      __MODE__: JSON.stringify(this.getMode()),
      __APP_NAME__: JSON.stringify(this.getAppName()),
      __DEBUG_MODE__: this.getMode() !== 'production',
    }
  }
}

module.exports = {
  platformWeb,
  platformNative,
  platformsNative,
  Utilities: Utilities
};
