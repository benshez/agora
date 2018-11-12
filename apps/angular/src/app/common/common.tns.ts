import { CommonModule } from '@angular/common';

import { I18nModule } from '@common/modules/i18n/module';

export const TNS_COMMON_MODULE_DECLARATIONS: Array<any> = [];

export const TNS_COMMON_MODULE_IMPORTS: Array<any> = [CommonModule, I18nModule];

export const TNS_COMMON_MODULE_EXPORTS: Array<any> = [
    I18nModule,
];

export const TNS_COMMON_SERVICES: Array<any> = [];
