import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from '@common/modules/app/store';
import { I18NEffects } from '@common/modules/i18n/utilities/common';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import {
    TNS_COMMON_SERVICES,
    TNS_COMMON_MODULE_DECLARATIONS,
    TNS_COMMON_MODULE_EXPORTS,
    TNS_COMMON_MODULE_IMPORTS
} from '@common/common.tns';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([I18NEffects]),
        ...TNS_COMMON_MODULE_IMPORTS],
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
