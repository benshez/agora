import { Injectable, Inject } from '@angular/core';
import * as _ from 'lodash';

import { Config } from '@common/utils/Config';
import { LogTarget } from '@common/modules/logger/classes';
import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';

@Injectable()
export class LogService {

    constructor(@Inject(LogTarget) private targets: LogTarget[]) {
    }

    public debug(...msg) {
        if (Config.DEBUG.LEVEL_4) {
            return Promise.all(_.map(this.targets, logger => this.logEvent(logger, msg, ELogLevel.Debug)));
        }
        return Promise.resolve();
    }

    public error(...err) {
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_3) {
            return Promise.all(_.map(this.targets, logger => this.logEvent(logger, err, ELogLevel.Error)));
        }
        return Promise.resolve();
    }

    public warn(...err) {
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_2) {
            return Promise.all(_.map(this.targets, logger => this.logEvent(logger, err, ELogLevel.Warning)));
        }
        return Promise.resolve();
    }

    public info(...err) {
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_1) {
            return Promise.all(_.map(this.targets, logger => this.logEvent(logger, err, ELogLevel.Info)));
        }
        return Promise.resolve();
    }

    private logEvent(target: LogTarget, message: string | Object, level: ELogLevel) {
        return target.log({ level: level, message: message });
    }
}
