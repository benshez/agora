import { SharedModule } from '@shared/module';
import { RouterModule } from '@shared/modules/router';
import { HomeRoutes } from '@views/home/routes';
import { HomeComponent } from '@views/home/components/home/component';

export const COMPONENT_MODULES: Array<any> = [
    SharedModule,
    RouterModule.forChild(<any>HomeRoutes)
];

export const COMPONENT_DECLARATIONS: Array<any> = [HomeComponent];
