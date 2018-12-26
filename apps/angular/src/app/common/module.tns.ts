import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { I18NEffects } from '@common/index';
import { APP_ROOT_REDUCER, APP_META_REDUCER } from '@common/base/reducers/reducers';

import {
    TNS_COMMON_SERVICES,
    TNS_COMMON_MODULE_DECLARATIONS,
    TNS_COMMON_MODULE_EXPORTS,
    TNS_COMMON_MODULE_IMPORTS
} from '@common/common.tns';

@NgModule({
    imports: [
        StoreModule.forRoot(APP_ROOT_REDUCER, { metaReducers: APP_META_REDUCER }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([I18NEffects]),
        ...TNS_COMMON_MODULE_IMPORTS
    ],
    declarations: [...TNS_COMMON_MODULE_DECLARATIONS],
    exports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        ...TNS_COMMON_MODULE_EXPORTS
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [...TNS_COMMON_SERVICES]
})
export class AgoraCommonModule { }
