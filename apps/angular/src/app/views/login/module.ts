import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    COMPONENT_MODULES,
    COMPONENT_DECLARATIONS,
    COMPONENT_EXPORTS,
    COMPONENT_ENTRY
} from '@views/login/common';

@NgModule({
    imports: [RouterModule, ...COMPONENT_MODULES],
    declarations: [...COMPONENT_DECLARATIONS],
    exports: [...COMPONENT_EXPORTS],
    entryComponents: [...COMPONENT_ENTRY]
})
export class LoginModule { }
