import { Injectable, Provider } from '@angular/core';
import { MatSnackBar } from '@angular/material';

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
        options: LogTargetOptions,
        private matSnackBar: NotificationService
    ) {
        super(options);
        debugger;
    }

    writeToLog(event: ILogEvent) {
        debugger
        // this.snackBar.open(event.message.toString(), '', {
        //     duration: 1000,
        // });
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

export function createConsoleTarget(logLevel: ELogLevel, consoleService: ConsoleService, snackBar: NotificationService) {
    return new ConsoleTarget(consoleService, { minLogLevel: logLevel }, snackBar);
}

export function provideConsoleTarget(logLevel: ELogLevel, snackBar: MatSnackBar): Provider {
    return {
        provide: LogTarget, deps: [ConsoleService],
        multi: true,
        useFactory: (c: ConsoleService, s: NotificationService) => new ConsoleTarget(c, { minLogLevel: logLevel }, s)
    };
}
