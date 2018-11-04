import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { COMPONENT_MODULES } from './app.common';
import { Config } from '@common/utils/Config';
import { SharedModule } from '@shared/module';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        SharedModule,
        ...COMPONENT_MODULES
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
