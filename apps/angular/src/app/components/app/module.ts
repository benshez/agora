import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from '@components/app/components/component';
import { COMPONENT_MODULES, COMPONENT_PROVIDERS } from '@components/app/common';
import { Config } from '@common/utils/Config';
import { environment } from '@environments/environment';
import { COMMON_MODULE_FOR_ROOT } from '@common/module';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
Config.DEBUG.LEVEL_4 = !environment.production;

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        ...COMMON_MODULE_FOR_ROOT,
        ...COMPONENT_MODULES
    ],
    providers: [...COMPONENT_PROVIDERS],
    bootstrap: [AppComponent],
})
export class AppModule { }
