import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular';
import {
    COMPONENT_MODULES,
    COMPONENT_DECLARATIONS,
    COMPONENT_EXPORTS,
    COMPONENT_ENTRY
} from '@views/login/common';

@NgModule({
    imports: [NativeScriptRouterModule, ...COMPONENT_MODULES],
    declarations: [...COMPONENT_DECLARATIONS],
    exports: [...COMPONENT_EXPORTS],
    entryComponents: [...COMPONENT_ENTRY]
})
export class LoginModule { }
