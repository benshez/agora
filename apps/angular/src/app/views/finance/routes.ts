import { Routes } from '@angular/router';

import { ReSubmissionsComponent } from '@views/finance/components/resubs/components/component';
import { ChangePaymentsComponent } from '@views/finance/components/payments/components/component';

export const FinanceRoutes: Routes = [
    {
        path: 'finance-payments',
        component: ChangePaymentsComponent
    },
    {
        path: 'finance-resubs',
        component: ReSubmissionsComponent
    }
];
