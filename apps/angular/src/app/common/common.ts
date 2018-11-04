import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgoraLanguageService } from '@common/translate/service';
import { I18nModule } from '@common/modules/i18n/module';
import { MaterialModule } from '@shared/modules/material/module';
import { TranslatePipe } from '@common/modules/i18n/filters/translate';

export const COMMON_MODULE_DECLARATIONS: Array<any> = [TranslatePipe];

export const COMMON_MODULE_IMPORTS: Array<any> = [FormsModule, CommonModule, I18nModule];

export const COMMON_MODULE_EXPORTS: Array<any> = [
    CommonModule,
    FormsModule,
    I18nModule,
    MaterialModule
];

export const COMMON_SERVICES: Array<any> = [AgoraLanguageService];
