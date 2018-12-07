import { Injectable, Provider } from '@angular/core';

import {
    LogTargetBase,
    LogTargetOptions,
    LogTarget
} from '@common/modules/logger/classes';

import { ILogEvent } from '@common/modules/logger/interfaces/ILogEvent';
import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';
import { SplunkService } from '@common/modules/logger/targets/splunk/services/service';

@Injectable()
export class SplunkTarget extends LogTargetBase {
    constructor(
        private splunk: SplunkService,
        options: LogTargetOptions
    ) {
        super(options);
    }

    writeToLog(event: ILogEvent) {
        switch (event.level) {
            case ELogLevel.Debug:
                this.splunk.log(event.message);
                break;
            case ELogLevel.Info:
                this.splunk.info(event.message);
                break;
            case ELogLevel.Warning:
                this.splunk.warn(event.message);
                break;
            case ELogLevel.Error:
                this.splunk.error(event.message);
                break;
        }
        return Promise.resolve();
    }
}

export function createSplunkTarget(logLevel: ELogLevel, splunkService: SplunkService) {
    return new SplunkTarget(splunkService, { minLogLevel: logLevel });
}

export function provideSplunkTarget(logLevel: ELogLevel): Provider {
    return {
        provide: LogTarget,
        deps: [SplunkService],
        multi: true,
        useFactory: (c: SplunkService) => new SplunkTarget(c, { minLogLevel: logLevel })
    };
}

