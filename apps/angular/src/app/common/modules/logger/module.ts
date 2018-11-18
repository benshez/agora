import { NgModule, ModuleWithProviders } from '@angular/core';
import { LogTarget } from '@common/modules/logger/classes/LogTarget';
import { ConsoleService } from '@common/modules/logger/targets/console/services/service';
import { ConsoleTarget } from '@common/modules/logger/targets/console/classes/ConsoleTarget';
import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';
import { LogService } from '@common/modules/logger/services/service';

@NgModule({
    imports: [

    ],
    providers: [
        LogService
    ],
    exports: []
})

export class AgoraLoggerModule {
    static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
        return {
            ngModule: AgoraLoggerModule,
            providers: configuredProviders
        };
    }
}

export const LOGGER_MODULE_FOR_ROOT: Array<any> = [
    AgoraLoggerModule.forRoot([
        { provide: ConsoleService, useFactory: (cons) },
        { provide: LogTarget, multi: true, deps: [ConsoleService], useFactory: (consoleLogTarget) }
    ])
];

export function cons() {
    return console;
}

export function consoleLogTarget(service: ConsoleService) {
    return new ConsoleTarget(service, { minLogLevel: ELogLevel.Debug });
}
