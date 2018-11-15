import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AppComponent } from '@components/app/components/component';

import { TNS_COMPONENT_MODULES } from '@components/app/common.tns';

import { Config } from '@common/utils/Config';

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

@NgModule({
    declarations: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptCommonModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        ...TNS_COMPONENT_MODULES
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
