import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { LogTarget } from '@common/modules/logger/classes/LogTarget';
import { ConsoleService } from '@common/modules/logger/targets/console/services/service';
import { ConsoleTarget, createConsoleTarget } from '@common/modules/logger/targets/console/classes/ConsoleTarget';
import { SplunkService } from '@common/modules/logger/targets/splunk/services/service';
import { SplunkTarget, createSplunkTarget, provideSplunkTarget } from '@common/modules/logger/targets/splunk/classes/SplunkTarget';

import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';
import { LogService } from '@common/modules/logger/services/service';
import { MaterialModule } from '@shared/modules/material/module';
import { NotificationService } from '@common/modules/logger/targets/notification/services/service';

@NgModule({
    imports: [MaterialModule],
    providers: [
        LogService,
        NotificationService
    ],
    exports: [MaterialModule]
})

export class AgoraLoggerModule {
    static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
        return {
            ngModule: AgoraLoggerModule,
            providers: configuredProviders
        };
    }
}

let service: any = (!environment.production) ? SplunkService : null;
let target: any = (!environment.production) ? splunkLogTarget : null;
let logger: any = (!environment.production) ? LogTarget : null;

export const LOGGER_MODULE_FOR_ROOT: Array<any> = [
    AgoraLoggerModule.forRoot([
        { provide: service, deps: [HttpClient], useFactory: (factory) },
        { provide: logger, multi: true, deps: [service], useFactory: (target) }
    ])
];

export function factory(http: HttpClient) {
    debugger
    let $factory: any = (environment.production) ? null : new service(http);

    return $factory;
}

export function consoleLogTarget(service: ConsoleService) {
    return new ConsoleTarget(service, { minLogLevel: ELogLevel.Debug });
}

export function splunkLogTarget(service: SplunkService) {
    return new SplunkTarget(service, { minLogLevel: ELogLevel.Debug });
}


