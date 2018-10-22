import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AppComponent } from './app.component';

import { TNS_COMPONENT_MODULES } from './app.common.tns';

@NgModule({
    declarations: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptCommonModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        TranslateModule.forRoot(),
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
