import baseConfig from './base.config';

baseConfig.REPORT('info',`Starting build process using ${baseConfig.TARGET()}`);

module.exports = require(buildConfig.BUILD_FILE());
