import { NgModule } from '@angular/core';

import { DynamicLoaderService } from '@components/dynamic/services/loader/service';
import { ControlFactoryDirective } from '@components/dynamic/directive';
import { COMPONENT_MODULES, COMPONENT_DECLARATIONS, COMPONENT_DIRECTIVES } from '@components/dynamic/common';

@NgModule({
    imports: [...COMPONENT_MODULES],
    declarations: [...COMPONENT_DECLARATIONS, ...COMPONENT_DIRECTIVES, ControlFactoryDirective],
    exports: [ControlFactoryDirective]
})
export class DynamicModule {
    static forRoot() {
        return {
            ngModule: DynamicModule,
            providers: [DynamicLoaderService]
        };
    }
}
