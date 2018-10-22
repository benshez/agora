import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { COMPONENT_MODULES, COMPONENT_DECLARATIONS } from '@components/header/common';

@NgModule({
    imports: [...COMPONENT_MODULES],
    declarations: [...COMPONENT_DECLARATIONS],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HeaderModule {
    static forRoot() {
        return {
            ngModule: HeaderModule
        };
    }
}
