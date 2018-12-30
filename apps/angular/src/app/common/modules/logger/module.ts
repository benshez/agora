import { NgModule, ModuleWithProviders } from '@angular/core';

import { environment } from '@environments/environment';
import { provideTarget as provideConsoleTarget } from '@common/modules/logger/targets/console/classes/ConsoleTarget';
import { provideTarget as provideSplunkTarget } from '@common/modules/logger/targets/splunk/classes/SplunkTarget';

import {
    LOGGER_COMPONENT_IMPORTS,
    LOGGER_COMPONENT_DECLARATIONS,
    LOGGER_COMPONENT_EXPORTS,
    LOGGER_PROVIDERS
} from '@common/modules/logger/common';

@NgModule({
    imports: [...LOGGER_COMPONENT_IMPORTS],
    declarations: [...LOGGER_COMPONENT_DECLARATIONS],
    providers: [...LOGGER_PROVIDERS],
    entryComponents: [...LOGGER_COMPONENT_DECLARATIONS],
    exports: [...LOGGER_COMPONENT_EXPORTS]
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
    AgoraLoggerModule.forRoot(
        (environment.production) ? provideSplunkTarget() : provideConsoleTarget()
    )
];
