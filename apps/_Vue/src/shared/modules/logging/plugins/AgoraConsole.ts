import { ConsoleTarget, LogService, LogLevel } from '../';

export const AgoraConsole = {
  install(Vue, options) {
    Vue.prototype.$agoraConsole = new LogService([
      new ConsoleTarget(console, {
        minLogLevel: LogLevel.Debug
      })
    ]);
  }
};
