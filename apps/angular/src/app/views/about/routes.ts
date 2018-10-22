import { Routes } from '@angular/router';

import { AboutComponent } from '@views/about/components/about/component';
import { AboutRouteGuardService } from '@views/about/services/route.guard.service';

export const AboutRoutes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [AboutRouteGuardService]
    }
];
