import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ILanguage } from '@common/modules/i18n/interfaces/index';
import { WindowService } from '@common/services/window/service';
import { IAppState } from '@common/modules/app/interfaces/index';
import { ChangeAction } from '@common/modules/i18n/actions/index';
import { DEFAULT_LANGUAGE, FILTERED_LANGUAGE } from '@common/modules/i18n/languages';

@Injectable()
export class I18NService {

    constructor(
        private win: WindowService,
        private store: Store<IAppState>
    ) {

        this.store
            .select(s => s.i18n)
            .subscribe((state: ILanguage) => {
                FILTERED_LANGUAGE(state.key)
            });

        this.store.dispatch(new ChangeAction(DEFAULT_LANGUAGE));
    }
}
