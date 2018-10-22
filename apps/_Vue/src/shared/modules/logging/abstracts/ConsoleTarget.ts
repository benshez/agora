import {LogTargetBase, ConsoleService, LogTargetOptions, ILogEvent, LogLevel} from '../'

export class ConsoleTarget extends LogTargetBase {
    constructor(private console: ConsoleService, options: LogTargetOptions) {
      super(options);
    }
  
    WriteToLog(event: ILogEvent) {
      switch (event.level) {
        case LogLevel.Debug:
          this.console.log(event.message);
          break;
        case LogLevel.Info:
          this.console.info(event.message);
          break;
        case LogLevel.Warning:
          this.console.warn(event.message);
          break;
        case LogLevel.Error:
          this.console.error(event.message);
          break;
      }
      return Promise.resolve();
    }
  }