import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from '@common/modules/app/store';
import { I18NEffects } from '@common/modules/i18n/utilities/common';
import { COMMON_SERVICES, COMMON_MODULE_IMPORTS, COMMON_MODULE_EXPORTS, COMMON_MODULE_DECLARATIONS } from '@common/common';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([I18NEffects]),
        ...COMMON_MODULE_IMPORTS],
    declarations: [...COMMON_MODULE_DECLARATIONS],
    exports: [...COMMON_MODULE_EXPORTS],
    providers: [...COMMON_SERVICES]
})
export class AgoraCommonModule { }
