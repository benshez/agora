import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/module';
import { HeaderComponent } from '@components/header/components/header/component';

export const COMPONENT_MODULES: Array<any> = [SharedModule, TranslateModule.forChild()];

export const COMPONENT_DECLARATIONS: Array<any> = [HeaderComponent];

export const COMPONENT_EXPORTS: Array<any> = [HeaderComponent];
