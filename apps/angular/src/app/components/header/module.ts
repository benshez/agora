import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';

import { ProgressBarService } from '@shared/services/bar/service';

import {
    COMPONENT_MODULES,
    COMPONENT_DECLARATIONS,
    COMPONENT_EXPORTS
} from './common';

@NgModule({
    imports: [...COMPONENT_MODULES],
    declarations: [...COMPONENT_DECLARATIONS],
    exports: [...COMPONENT_EXPORTS]
})
export class HeaderModule {
    static forRoot() {
        return {
            ngModule: HeaderModule,
            providers: [ProgressBarService]
        };
    }
}
