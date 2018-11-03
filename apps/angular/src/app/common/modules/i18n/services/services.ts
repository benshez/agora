import {
    Injectable,
    InjectionToken
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
// import {
//     Analytics,
//     AnalyticsService
// } from '@common/modules/analytics/index';
import { ILanguage } from '@common/modules/i18n/interfaces/index';
import { WindowService } from '@common/services/window/service';
import { I18NState } from '@common/modules/i18n/interfaces/index';
import { IAppState } from '@common/modules/app/interfaces/index';
import { CATEGORY } from '@common/modules/i18n/common/index';
import { InitialState } from '@common/modules/i18n/states/index';
import { ChangeAction } from '@common/modules/i18n/actions/index';

export const Languages: InjectionToken<Array<ILanguage>> = new InjectionToken('Languages');
export const LanguageViewHelper: InjectionToken<Array<any>> = new InjectionToken('LanguageViewHelper');
export const LanguageProviders = [
    { provide: Languages, useValue: [] },
    { provide: LanguageViewHelper, useValue: null }
];

@Injectable()
export class I18NService {

    constructor(
        private translate: TranslateService,
        private win: WindowService,
        private store: Store<IAppState>
    ) {

        //this.category = CATEGORY;

        translate.setDefaultLang(InitialState.lang);

        //const userLang = this.win.navigator.language.split('-')[0];

        this.store
            .select(s => s.i18n)
            .subscribe((state: I18NState) => {
                this.translate.setTranslation(
                    state.lang,
                    require(`../${state.lang}.ts`)
                );

                this.translate.use(state.lang);
            });

        this.store.dispatch(new ChangeAction('en'));
    }
}
