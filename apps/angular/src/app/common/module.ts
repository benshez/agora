import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
    reducers,
    metaReducers,
    I18NEffects
} from '@common/index';

import {
    COMMON_SERVICES,
    COMMON_MODULE_IMPORTS,
    COMMON_MODULE_EXPORTS,
    COMMON_MODULE_DECLARATIONS
} from '@common/common';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([I18NEffects]),
        ...COMMON_MODULE_IMPORTS
    ],
    declarations: [...COMMON_MODULE_DECLARATIONS],
    exports: [...COMMON_MODULE_EXPORTS],
    providers: [...COMMON_SERVICES]
})

export class AgoraCommonModule {
    static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
        return {
            ngModule: AgoraCommonModule,
            providers: configuredProviders
        };
    }
}

export const COMMON_MODULE_FOR_ROOT: Array<any> = [
    AgoraCommonModule.forRoot([])
];
