import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { reducers, metaReducers } from '@common/modules/app/store';
import { HttpLoaderFactory, I18NEffects } from '@common/modules/i18n/utilities/common';
import { COMMON_SERVICES, COMMON_MODULE_IMPORTS, COMMON_MODULE_EXPORTS, COMMON_MODULE_DECLARATIONS } from '@common/common';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        EffectsModule.forFeature([I18NEffects]),
        ...COMMON_MODULE_IMPORTS],
    declarations: [...COMMON_MODULE_DECLARATIONS],
    exports: [TranslateModule, ...COMMON_MODULE_EXPORTS],
    providers: [...COMMON_SERVICES]
})
export class AgoraCommonModule { }
