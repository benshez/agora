import { ILogEvent, LogTarget, LogTargetOptions } from '../';

export abstract class LogTargetBase implements LogTarget {
  constructor(protected options: LogTargetOptions) {}

  log(event: ILogEvent): Promise<any> {
    if (event.level >= this.options.minLogLevel) {
      return this.WriteToLog(event);
    }
    return Promise.resolve();
  }

  protected abstract WriteToLog(event: ILogEvent): Promise<any>;
}
