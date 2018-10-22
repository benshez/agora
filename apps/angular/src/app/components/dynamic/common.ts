import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/module';
import { DynamicComponent } from '@components/dynamic/components/component';

export const COMPONENT_MODULES: Array<any> = [
    SharedModule,
    TranslateModule.forChild()
];

export const COMPONENT_DECLARATIONS: Array<any> = [DynamicComponent];
