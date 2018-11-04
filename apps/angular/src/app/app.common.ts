import { AppRoutingModule } from '@shared/modules/routing/module';

import { HomeModule } from '@views/home/module';
import { AboutModule } from '@views/about/module';
import { LoginModule } from '@views/login/module';
import { ClaimsModule } from '@views/claims/module';
import { FinanceModule } from '@views/finance/module';
import { HeaderModule } from '@components/header/module';
import { MenuModule } from '@components/menu/module';
import { AgoraPipeModule } from '@common/modules/app/filters/module';

export const COMPONENT_MODULES: Array<any> = [
    AppRoutingModule,
    HomeModule,
    AboutModule,
    LoginModule,
    ClaimsModule,
    FinanceModule,
    HeaderModule.forRoot(),
    MenuModule
];

export * from '@shared/modules/routing/module';
