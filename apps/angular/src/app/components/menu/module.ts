import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    COMPONENT_MODULES,
    COMPONENT_DECLARATIONS,
    COMPONENT_EXPORTS
} from '@components/menu/common';

@NgModule({
    imports: [RouterModule, ...COMPONENT_MODULES],
    declarations: [...COMPONENT_DECLARATIONS],
    exports: [...COMPONENT_EXPORTS]
})
export class MenuModule { }
