
import { DynamicComponent } from '@components/dynamic/components/component';
import { DynamicComponentDirective } from '@components/dynamic/directives/loader';
import { COMMON_MODULE_FOR_ROOT } from '@common/module';

export const COMPONENT_MODULES: Array<any> = [
    ...COMMON_MODULE_FOR_ROOT
];

export const COMPONENT_DECLARATIONS: Array<any> = [DynamicComponent];

export const COMPONENT_DIRECTIVES: Array<any> = [DynamicComponentDirective];
