import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { LANGUAGES, I18NService } from '@common/modules/i18n/services/services';
import * as fromI18n from '@common/modules/i18n/utilities/common';

@Component({
    moduleId: module.id.toString(),
    selector: 'agora-i18n',
    templateUrl: 'component.html'
})
export class I18NComponent implements OnInit {
    public lang: string;
    public supportedLanguages: Array<fromI18n.ILanguage> = LANGUAGES;

    constructor(
        private store: Store<fromI18n.ILanguage>,
        private languageService: I18NService,
        private location: Location,
    ) {
        this.store.subscribe((s: any) => {
            this.lang = s && s.i18n ? s.i18n.lang : '';
        });
    }

    onLanguageChange(e: fromI18n.ILanguage) {
        const lang = e.key;

        this.store.dispatch(new fromI18n.LangChangedAction(lang));

        this.languageService.onChangeTitle(this.location.path());
    }


    ngOnInit() { }
}
