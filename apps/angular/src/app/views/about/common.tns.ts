import { SharedModule } from '@shared/module';
import { RouterModule } from '@shared/modules/router';
import { AboutRoutes } from '@views/about/routes';
import { AboutComponent } from '@views/about/components/about/component';
import { AboutRouteGuardService } from '@views/about/services/route.guard';

export const COMPONENT_MODULES: Array<any> = [
    SharedModule,
    RouterModule.forChild(<any>AboutRoutes)
];

export const COMPONENT_PROVIDERS: Array<any> = [
    AboutRouteGuardService
];

export const COMPONENT_DECLARATIONS: Array<any> = [AboutComponent];
