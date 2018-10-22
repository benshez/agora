import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeComponent } from '@views/home/components/home/component';
import { COMPONENT_MODULES } from '@views/home/common';

@NgModule({
    imports: [
        ...COMPONENT_MODULES
    ],
    declarations: [HomeComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {

    constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
        if (parentModule) {
            throw new Error('HomeModule already loaded; Import in root module only.');
        }
    }
}
