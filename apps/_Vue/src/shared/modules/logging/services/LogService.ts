import * as _ from 'lodash';
import { AgoraConfiguration } from '../../../common/modules/core/constants/AgoraConfiguration';
import { LogTarget, LogLevel } from '../';

export class LogService {
  constructor(private targets: LogTarget[]) {}

  public debug(...msg) {
    if (AgoraConfiguration.DEBUG.LEVEL_4) {
      return Promise.all(
        _.map(this.targets, logger =>
          this.logEvent(logger, msg, LogLevel.Debug)
        )
      );
    }
    return Promise.resolve();
  }

  public error(...err) {
    if (AgoraConfiguration.DEBUG.LEVEL_4 || AgoraConfiguration.DEBUG.LEVEL_3) {
      return Promise.all(
        _.map(this.targets, logger =>
          this.logEvent(logger, err, LogLevel.Error)
        )
      );
    }
    return Promise.resolve();
  }

  public warn(...err) {
    if (AgoraConfiguration.DEBUG.LEVEL_4 || AgoraConfiguration.DEBUG.LEVEL_2) {
      return Promise.all(
        _.map(this.targets, logger =>
          this.logEvent(logger, err, LogLevel.Warning)
        )
      );
    }
    return Promise.resolve();
  }

  public info(...err) {
    if (AgoraConfiguration.DEBUG.LEVEL_4 || AgoraConfiguration.DEBUG.LEVEL_1) {
      return Promise.all(
        _.map(this.targets, logger => this.logEvent(logger, err, LogLevel.Info))
      );
    }
    return Promise.resolve();
  }

  private logEvent(
    target: LogTarget,
    message: string | Object,
    level: LogLevel
  ) {
    return target.log({ level: level, message: message });
  }
}
