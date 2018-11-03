import { Observable } from 'rxjs/Observable';
import { I18NState } from '@common/modules/i18n/interfaces/I18NState';
import { en } from '@common/modules/i18n/index';

export const InitialState: I18NState = {
    lang: 'en',
    translation: en.translation
};

export function getLang(state$: Observable<I18NState>) {
    return state$.lift(state => state);
}
