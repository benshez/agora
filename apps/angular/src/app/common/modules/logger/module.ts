import { NgModule, ModuleWithProviders } from '@angular/core';
import { environment } from '@environments/environment';
import { LogTarget } from '@common/modules/logger/classes/LogTarget';
import { ConsoleService } from '@common/modules/logger/targets/console/services/service';
import { ConsoleTarget } from '@common/modules/logger/targets/console/classes/ConsoleTarget';
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

let service: any = (!environment.production) ? ConsoleService : null;
let target: any = (!environment.production) ? consoleLogTarget : null;
let logger: any = (!environment.production) ? LogTarget : null;

export const LOGGER_MODULE_FOR_ROOT: Array<any> = [
    AgoraLoggerModule.forRoot([
        { provide: service, useFactory: (factory) },
        { provide: logger, multi: true, deps: [service], useFactory: (target) }
    ])
];

export function factory() {
    let $factory: any = (environment.production) ? null : console;


    return $factory;
}

export function consoleLogTarget(service: ConsoleService, snackbar: NotificationService) {
    return new ConsoleTarget(service, { minLogLevel: ELogLevel.Debug }, snackbar);
}
