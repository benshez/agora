import { AppRoutingModule } from '@shared/modules/routing/module';
import {
    NativeScriptUISideDrawerModule
} from 'nativescript-ui-sidedrawer/angular';

import { HomeModule } from '@views/home/module';
import { AboutModule } from '@views/about/module';
import { LoginModule } from '@views/login/module';
import { ClaimsModule } from '@views/claims/module';
import { FinanceModule } from '@views/finance/module';
import { HeaderModule } from '@components/header/module';
import { MenuModule } from '@components/menu/module';
import { AgoraCommonModule } from '@common/module';

export const TNS_COMPONENT_MODULES: Array<any> = [
    AppRoutingModule,
    NativeScriptUISideDrawerModule,
    HomeModule,
    AboutModule,
    LoginModule,
    ClaimsModule,
    FinanceModule,
    HeaderModule.forRoot(),
    MenuModule,
    AgoraCommonModule
];

export * from '@shared/modules/routing/module';
