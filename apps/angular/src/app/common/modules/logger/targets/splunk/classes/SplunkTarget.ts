import { Injectable } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SplunkApiInterceptor } from '@common/modules/logger/targets/splunk/interceptors/SplunkInterceptor';

import {
    LogTargetBase,
    LogTargetOptions,
    LogTarget
} from '@common/modules/logger/classes';

import { ILogEvent } from '@common/modules/logger/interfaces/ILogEvent';
import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';
import { SplunkService } from '@common/modules/logger/targets/splunk/services/service';
import { Config } from '@common/utils/Config';

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

export function provideTarget() {
    return [
        { provide: SplunkService, deps: [HttpClient], useFactory: (createService) },
        { provide: LogTarget, multi: true, deps: [SplunkService], useFactory: (createTarget) },
        { provide: HTTP_INTERCEPTORS, useClass: SplunkApiInterceptor, multi: true }
    ]
}

export function createService(http: HttpClient) {
    return new SplunkService(http);
}

export function createTarget(service: SplunkService) {
    return new SplunkTarget(service, Config.MIN_LOG_LEVEL());
}
