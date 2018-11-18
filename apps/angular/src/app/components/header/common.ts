import { COMMON_MODULE_FOR_ROOT } from '@common/module';
import { HeaderComponent } from '@components/header/components/header/component';

export const COMPONENT_MODULES: Array<any> = [
    ...COMMON_MODULE_FOR_ROOT
];

export const COMPONENT_DECLARATIONS: Array<any> = [HeaderComponent];

export const COMPONENT_EXPORTS: Array<any> = [HeaderComponent];
