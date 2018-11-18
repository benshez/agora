import { RouterModule } from '@shared/modules/router';
import { FinanceRoutes } from '@views/finance/routes';
import { ReSubmissionsComponent } from '@views/finance/components/resubs/components/component';
import { ChangePaymentsComponent } from '@views/finance/components/payments/components/component';
import { AgoraPipeModule } from '@common/modules/app/filters/module';
import { COMMON_MODULE_FOR_ROOT } from '@common/module';

export const COMPONENT_MODULES: Array<any> = [
    ...COMMON_MODULE_FOR_ROOT,
    RouterModule.forChild(<any>FinanceRoutes),
    AgoraPipeModule
];

export const COMPONENT_DECLARATIONS: Array<any> = [ChangePaymentsComponent, ReSubmissionsComponent];
