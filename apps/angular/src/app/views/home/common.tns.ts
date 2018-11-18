import { COMMON_MODULE_FOR_ROOT } from '@common/module';
import { RouterModule } from '@shared/modules/router';
import { HomeRoutes } from '@views/home/routes';
import { HomeComponent } from '@views/home/components/home/component';
import { AgoraPipeModule } from '@common/modules/app/filters/module';

export const COMPONENT_MODULES: Array<any> = [
    ...COMMON_MODULE_FOR_ROOT,
    RouterModule.forChild(<any>HomeRoutes),
    AgoraPipeModule
];

export const COMPONENT_DECLARATIONS: Array<any> = [HomeComponent];
