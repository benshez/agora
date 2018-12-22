import { Observable } from 'rxjs/Observable';

import { ILanguage } from '@common/modules/i18n/interfaces';
import { FILTERED_DEFAULT_LANGUAGE } from '@common/modules/i18n/services/services';

export const InitialI18NState: ILanguage = {
    ...FILTERED_DEFAULT_LANGUAGE
};

export function getLanguagesFromState(state$: Observable<ILanguage>) {
    return state$.lift(state => state);
}
