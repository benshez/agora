import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/module';
import { RouterModule } from '@shared/modules/router';
import { UserRoutes } from '@views/login/routes';
import { UserComponent } from '@views/login/components/user/component';
import { UserDirective } from '@views/login/components/user/directive';
import { LoginComponent } from '@views/login/components/login/component';
import { RegisterComponent } from '@views/login/components/register/component';

export const COMPONENT_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>UserRoutes),
    TranslateModule.forChild()
];

export const COMPONENT_DECLARATIONS: Array<any> = [
    UserComponent,
    UserDirective,
    LoginComponent,
    RegisterComponent
];

export const COMPONENT_EXPORTS: Array<any> = [];

export const COMPONENT_ENTRY: Array<any> = [LoginComponent, RegisterComponent];
