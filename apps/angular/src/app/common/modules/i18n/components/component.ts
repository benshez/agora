import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LANGUAGES } from '@common/modules/i18n/services/services';
import * as fromI18n from '@common/modules/i18n/utilities/common';

@Component({
    moduleId: module.id,
    selector: 'agora-i18n',
    templateUrl: 'component.html'
})
export class I18NComponent implements OnInit {
    public lang: string;
    public supportedLanguages: Array<fromI18n.ILanguage> = LANGUAGES;

    constructor(
        private store: Store<fromI18n.ILanguage>
    ) {
        this.store.subscribe((s: any) => {
            this.lang = s && s.i18n ? s.i18n.key : '';
        });
    }

    onLanguageChange(e: fromI18n.ILanguage) {
        this.store.dispatch(new fromI18n.LangChangedAction(e.key));
    }

    ngOnInit() { }
}
