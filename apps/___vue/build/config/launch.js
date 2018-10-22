const { exec } = require('child_process');
const winston = require('winston-color');

const ACTION = process.env.ACTION;
const TARGET = process.env.NODE_ENV;
const PLATFORM = process.env.PLATFORM;

// Validate action
if (['build', 'debug', 'run'].indexOf(ACTION) === -1) {
  winston.error('Invalid action');
  process.exit(1);
}

// Validation platform
if ([undefined, 'android', 'ios'].indexOf(PLATFORM) === -1) {
  winston.error('Invalid platform');
  process.exit(1);
}

switch (ACTION) {
  case 'build':
    winston.info('Building NativeScript application...');
    break;

  case 'debug':
    winston.info('Debugging NativeScript application...');
    break;

  case 'run':
    winston.info('Running NativeScript application...');
    break;
}

if (ACTION !== 'run' && !PLATFORM) {
  let tnsAndroidProcess = exec(`tns --path dist-native ${ACTION} android`);
  let tnsiOSProcess = exec(`tns --path dist-native ${ACTION} ios`);
  tnsAndroidProcess.stdout.pipe(process.stdout);
  tnsiOSProcess.stdout.pipe(process.stdout);
} else {
  let tnsProcess = exec(`tns --path dist-native ${ACTION} ${PLATFORM || ''}`);
  tnsProcess.stdout.pipe(process.stdout);
}
