import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { COMMON_SERVICES } from '@common/common';

@NgModule({
    declarations: [],
    exports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [...COMMON_SERVICES]
})
export class AgoraCommonModule { }
