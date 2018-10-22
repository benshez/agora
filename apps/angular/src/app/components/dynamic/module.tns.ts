import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { COMPONENT_MODULES, COMPONENT_DECLARATIONS } from './common';
import { DynamicLoaderService } from '@components/dynamic/services/loader/service';
import { ControlFactoryDirective } from '@components/dynamic/directive';

@NgModule({
    imports: [...COMPONENT_MODULES],
    declarations: [...COMPONENT_DECLARATIONS, ControlFactoryDirective],
    schemas: [NO_ERRORS_SCHEMA]
})
export class DynamicModule {
    static forRoot() {
        return {
            ngModule: DynamicModule,
            providers: [DynamicLoaderService]
        };
    }
}
