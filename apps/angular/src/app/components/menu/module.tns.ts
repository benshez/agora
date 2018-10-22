import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@shared/modules/router';

import {
    COMPONENT_MODULES,
    COMPONENT_DECLARATIONS,
    COMPONENT_EXPORTS
} from '@components/menu/common.tns';

@NgModule({
    imports: [RouterModule, ...COMPONENT_MODULES],
    declarations: [...COMPONENT_DECLARATIONS],
    exports: [...COMPONENT_EXPORTS],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MenuModule { }
