import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { AppRoutes } from '@shared/modules/routing/routes';

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(<any>AppRoutes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
