import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { I18nModule } from '@common/modules/i18n/module';
import { MaterialModule } from '@shared/modules/material/module';

export const COMMON_MODULE_DECLARATIONS: Array<any> = [];

export const COMMON_MODULE_IMPORTS: Array<any> = [
    FormsModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    I18nModule
];

export const COMMON_MODULE_EXPORTS: Array<any> = [
    CommonModule,
    FormsModule,
    I18nModule,
    MaterialModule
];

export const COMMON_SERVICES: Array<any> = [

];

export const COMMON_MODULE_ROOT: Array<any> = [

]
