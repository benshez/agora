const argv = require('yargs').argv;
const path = require('path');
const winston = require('winston-color');

const PATHS = () => {
  return {
    app: `./app`,
    assets: '',
    baseUrl: `./`,
    dist: `./dist`,
    templates: `./templates`,
    nodeModules: `node_modules`
  };
};

const PLATFORM = () => {
  return argv.platform;
};

const ENVIRONMENT = () => {
  return argv.environment;
};

const REQUIRE_BUILD_FILES = () => {
  return {
    development: `./${PLATFORM()}/${ENVIRONMENT()}`,
    production: `./${PLATFORM()}/${ENVIRONMENT()}`,
    test: `./${PLATFORM()}/${ENVIRONMENT()}`
  };
};

const BUILD_FILE = () => {
  REPORT('info', 'made it...');
  return REQUIRE_BUILD_FILES()[ENVIRONMENT()];
};

const REPORT = (reportType = 'info', message = '') => {
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
};

const EXTENTIONS = () => {
  return ['js', 'css', 'scss', 'vue'].reduce((exts, ext) => {
    exts.push(`.${PLATFORM()}.${ext}`);
    if (PLATFORM_IS_NATIVE()) exts.push(`.native.${ext}`);
    exts.push(`.${ext}`);
    return exts;
  }, []);
};

const PLATFORM_IS_NATIVE = () => {
  return ['ios', 'android'].includes(PLATFORM());
};

const PLATFORM_BUILD_TYPE = () => {
  return PLATFORM_IS_NATIVE() ? 'native' : 'web';
};

const OUTPUT_PATH = () => {
  return `${PATHS()['dist']}/${PLATFORM_BUILD_TYPE()}/${ENVIRONMENT()}`;
};

const TEMPLATE_PATH = () => {
  return `${PATHS()['templates']}/${PLATFORM_BUILD_TYPE()}`;
};

module.exports = {
  PATHS,
  PLATFORM,
  ENVIRONMENT,
  REQUIRE_BUILD_FILES,
  BUILD_FILE,
  REPORT,
  EXTENTIONS,
  PLATFORM_IS_NATIVE,
  PLATFORM_BUILD_TYPE,
  OUTPUT_PATH,
  TEMPLATE_PATH
};
