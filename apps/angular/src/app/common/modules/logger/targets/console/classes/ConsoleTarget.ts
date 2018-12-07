import { Injectable, Provider } from '@angular/core';

import {
    LogTargetBase,
    LogTargetOptions,
    LogTarget
} from '@common/modules/logger/classes';
import { ILogEvent } from '@common/modules/logger/interfaces/ILogEvent';
import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';
import { ConsoleService } from '@common/modules/logger/targets/console/services/service';
import { NotificationService } from '@common/modules/logger/targets/notification/services/service'

@Injectable()
export class ConsoleTarget extends LogTargetBase {
    constructor(
        private console: ConsoleService,
        options: LogTargetOptions
    ) {
        super(options);
    }

    writeToLog(event: ILogEvent) {
        switch (event.level) {
            case ELogLevel.Debug:
                this.console.log(event.message);
                break;
            case ELogLevel.Info:
                this.console.info(event.message);
                break;
            case ELogLevel.Warning:
                this.console.warn(event.message);
                break;
            case ELogLevel.Error:
                this.console.error(event.message);
                break;
        }
        return Promise.resolve();
    }
}

export function createConsoleTarget(logLevel: ELogLevel, consoleService: ConsoleService) {
    return new ConsoleTarget(consoleService, { minLogLevel: logLevel });
}

export function provideConsoleTarget(logLevel: ELogLevel): Provider {
    return {
        provide: LogTarget, deps: [ConsoleService],
        multi: true,
        useFactory: (c: ConsoleService) => new ConsoleTarget(c, { minLogLevel: logLevel })
    };
}
