import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import _ from 'lodash';

import { IAppState } from '@common/modules/app/interfaces/IAppState';
import { ILanguage } from '@common/modules/i18n/interfaces/ILanguage';
import { ITranslation } from '@common/modules/i18n/interfaces/ITranslation';

@Pipe({
    name: 'translate',
    pure: false
})

export class TranslatePipe implements PipeTransform {

    private translatedText: ITranslation;

    constructor(public store: Store<IAppState>) { }

    transform(value: string): string {
        if (!value) return;

        this.store
            .select(s => s.i18n)
            .subscribe((translation: ILanguage) => {
                this.translatedText = translation.translation;
            })

        return _.get(this.translatedText, value)
    }

}
