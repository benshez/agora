import { Observable } from 'rxjs/Observable';

import { ILanguage } from '@common/modules/i18n/interfaces';
import { FILTERED_DEFAULT_LANGUAGE, DEFAULT_LANGUAGE } from '@common/modules/i18n/languages';


export const InitialState: ILanguage = {
    ...FILTERED_DEFAULT_LANGUAGE
};

export function getLang(state$: Observable<ILanguage>) {
    return state$.lift(state => state);
}
