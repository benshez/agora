import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/module';
import { RouterModule } from '@shared/modules/router';
import { ClaimsRoutes } from '@views/claims/routes';
import { ClaimsCreateComponent } from '@views/claims/components/create/component';

export const COMPONENT_MODULES: Array<any> = [
    SharedModule,
    RouterModule.forChild(<any>ClaimsRoutes),
    TranslateModule.forChild()
];

export const COMPONENT_DECLARATIONS: Array<any> = [ClaimsCreateComponent];
