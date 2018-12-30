import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import {
    LogTargetBase,
    LogTargetOptions,
    LogTarget
} from '@common/modules/logger/classes';
import { ILogEvent } from '@common/modules/logger/interfaces/ILogEvent';
import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';
import { ConsoleService } from '@common/modules/logger/targets/console/services/service';
import { Config } from '@common/utils/Config';

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

export function provideTarget() {
    return [
        { provide: ConsoleService, deps: [HttpClient, MatSnackBar], useFactory: (createService) },
        { provide: LogTarget, multi: true, deps: [ConsoleService], useFactory: (createTarget) },
    ]
}

export function createService(http: HttpClient, snackBar: MatSnackBar) {
    return new ConsoleService(http, snackBar);
}

export function createTarget(service: ConsoleService) {
    return new ConsoleTarget(service, Config.MIN_LOG_LEVEL());
}
