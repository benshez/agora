import {
    Injectable
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { ILanguage } from '@common/modules/i18n/interfaces/index';
import { WindowService } from '@common/services/window/service';
import { IAppState } from '@common/modules/app/interfaces/index';
import { InitialState } from '@common/modules/i18n/states/index';
import { ChangeAction } from '@common/modules/i18n/actions/index';
import { DEFAULT_LANGUAGE, FILTERED_LANGUAGE } from '@common/modules/i18n/languages';

@Injectable()
export class I18NService {

    constructor(
        private translate: TranslateService,
        private win: WindowService,
        private store: Store<IAppState>
    ) {
        translate.setDefaultLang(InitialState.key);

        this.store
            .select(s => s.i18n)
            .subscribe((state: ILanguage) => {
                this.translate.setTranslation(
                    state.key,
                    FILTERED_LANGUAGE(state.key)
                );

                this.translate.use(state.key);
            });

        this.store.dispatch(new ChangeAction(DEFAULT_LANGUAGE));
    }
}
