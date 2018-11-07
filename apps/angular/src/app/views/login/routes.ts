import { Routes } from '@angular/router';

import { UserComponent } from '@views/login/components/user/component';

export const UserRoutes: Routes = [
    {
        path: 'user-login',
        component: UserComponent
    }
];
