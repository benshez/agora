import { SharedModule } from '@shared/module.tns';
import { RouterModule } from '@shared/modules/router';
import { ClaimsRoutes } from '@views/claims/routes';
import { ClaimsCreateComponent } from '@views/claims/components/create/component';
import { AgoraPipeModule } from '@common/modules/app/filters/module';

export const COMPONENT_MODULES: Array<any> = [
    SharedModule,
    RouterModule.forChild(<any>ClaimsRoutes),
    AgoraPipeModule
];

export const COMPONENT_DECLARATIONS: Array<any> = [ClaimsCreateComponent];
