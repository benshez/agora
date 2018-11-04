import { SharedModule } from '@shared/module';
import { RouterModule } from '@shared/modules/router';
import { FinanceRoutes } from '@views/finance/routes';
import { ReSubmissionsComponent } from '@views/finance/components/resubs/components/component';
import { ChangePaymentsComponent } from '@views/finance/components/payments/components/component';
import { AgoraPipeModule } from '@common/modules/app/filters/module';

export const COMPONENT_MODULES: Array<any> = [
    SharedModule,
    RouterModule.forChild(<any>FinanceRoutes),
    AgoraPipeModule
];

export const COMPONENT_DECLARATIONS: Array<any> = [ChangePaymentsComponent, ReSubmissionsComponent];
