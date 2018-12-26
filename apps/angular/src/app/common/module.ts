import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { I18NEffects } from '@common/index';
import { APP_ROOT_REDUCER, APP_META_REDUCER } from '@common/base/reducers/reducers';

import {
    COMMON_SERVICES,
    COMMON_MODULE_IMPORTS,
    COMMON_MODULE_EXPORTS,
    COMMON_MODULE_DECLARATIONS
} from '@common/common';

@NgModule({
    imports: [
        StoreModule.forRoot(APP_ROOT_REDUCER, { metaReducers: APP_META_REDUCER }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([I18NEffects]),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
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
