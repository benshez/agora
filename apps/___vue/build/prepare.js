const fs = require('fs-extra');
const path = require('path');
const {execSync} = require('child_process');
const winston = require('winston-color');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  templates: path.join(__dirname, '../templates')
};

function copyNativeScriptPlugins (tplPath) {
  const tplPackage = require('../templates/native/package.json');
  const appPackage = require('../package.json');

  winston.info('Copying NativeScript plugins to template dependencies...');
  const plugins = Object.keys(appPackage.dependencies)
    .filter(key => key.indexOf('nativescript-') !== -1)
    .reduce((obj, key) => {
      obj[key] = appPackage.dependencies[key];
      return obj;
    }, {});
  Object.assign(tplPackage.dependencies, plugins);
  fs.writeFileSync(tplPath + '/package.json', JSON.stringify(tplPackage, null, 2));
  winston.info(`Done!`);
}

function updateDistFromTemplate (distPath, tplPath, build) {
  winston.info(`Preparing ${build} application from template...`);
  fs.ensureDirSync(distPath);
  fs.copySync(tplPath, distPath, {overwrite: false});
  execSync("npm i", { cwd: distPath });
  winston.info(`Done!`);
}

module.exports = (build, mode) => {
  winston.info(`Bundling application for ${build} ${mode}...`);
  const distPath = `${PATHS.dist}/${build}/${mode}`;
  const tplPath = `${PATHS.templates}/${build}`;

  if (build === 'native') {
    copyNativeScriptPlugins(tplPath);
  }

  updateDistFromTemplate(distPath, tplPath, build);
};
