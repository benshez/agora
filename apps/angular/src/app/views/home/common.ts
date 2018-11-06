import { SharedModule } from '@shared/module';
import { RouterModule } from '@shared/modules/router';
import { HomeRoutes } from '@views/home/routes';
import { HomeComponent } from '@views/home/components/home/component';
import { AgoraPipeModule } from '@common/modules/app/filters/module';

export const COMPONENT_MODULES: Array<any> = [
    SharedModule,
    RouterModule.forChild(<any>HomeRoutes),
    AgoraPipeModule
];

export const COMPONENT_DECLARATIONS: Array<any> = [HomeComponent];
