import { COMMON_MODULE_FOR_ROOT } from '@common/module';
import { RouterModule } from '@shared/modules/router';
import { ClaimsRoutes } from '@views/claims/routes';
import { ClaimsCreateComponent } from '@views/claims/components/create/component';
import { AgoraPipeModule } from '@common/modules/app/filters/module';

export const COMPONENT_MODULES: Array<any> = [
    ...COMMON_MODULE_FOR_ROOT,
    RouterModule.forChild(<any>ClaimsRoutes),
    AgoraPipeModule
];

export const COMPONENT_DECLARATIONS: Array<any> = [ClaimsCreateComponent];
