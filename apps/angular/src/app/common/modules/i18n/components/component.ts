import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ILanguage } from '@common/modules/i18n/interfaces/ILanguage';
import { LANGUAGES } from '@common/modules/i18n/languages';
//import { I18NState, ILanguage } from '@common/modules/i18n/interfaces';
//import { LangChangedAction } from '../../../_components/i18n';
import * as fromI18n from '@common/modules/i18n/utilities/common';

@Component({
    moduleId: module.id.toString(),
    selector: 'agora-i18n',
    templateUrl: 'component.html',
    //providers: [LogService]
})
export class I18NComponent implements OnInit {
    public lang: string;
    public supportedLanguages: Array<ILanguage> = LANGUAGES;

    constructor(
        private store: Store<fromI18n.ILanguage>,
        //private log: LogService,
        //@Inject(Languages) private languages
    ) {
        // this.store.take(1).subscribe((s: any) => {
        //     this.lang = s && s.i18n ? s.i18n.lang : '';
        // });
        this.store.subscribe((s: any) => {
            this.lang = s && s.i18n ? s.i18n.lang : '';
        });
    }

    onLanguageChange(e: ILanguage) {
        const lang = e.key;

        //this.log.debug(`Language change: ${lang}`);

        this.store.dispatch(new fromI18n.LangChangedAction(lang));
    }

    ngOnInit() {
        //this.supportedLanguages = this.languages;
    }
}
