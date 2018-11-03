import {
    NgModule,
    ModuleWithProviders,
    Optional,
    SkipSelf,
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { I18N_COMPONENT_EXPORTS, I18N_COMPONENT_DECLARATIONS, I18N_PROVIDERS, I18N_COMPONENT_IMPORTS } from '@common/modules/i18n/common'

@NgModule({
    imports: [...I18N_COMPONENT_IMPORTS],
    declarations: [...I18N_COMPONENT_DECLARATIONS],
    providers: [...I18N_PROVIDERS],
    exports: [...I18N_COMPONENT_EXPORTS],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})

export class I18nModule {
    static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
        return {
            ngModule: I18nModule,
            providers: configuredProviders
        };
    }

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: I18nModule
    ) {
        if (parentModule) {
            throw new Error(
                'MultilingualModule already loaded; Import in root module only.'
            );
        }
    }
}
