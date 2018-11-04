import _ from 'lodash';
import { en } from '@common/modules/i18n/languages/en';
import { af } from '@common/modules/i18n/languages/af';
import { ILanguage } from '@common/modules/i18n/interfaces/ILanguage';

export const DEFAULT_LANGUAGE: string = 'en';

export const LANGUAGES: Array<ILanguage> = [
    en,
    af
];

export function FILTERED_LANGUAGE(key: string) {
    return _.find(LANGUAGES, function (o) {
        return o.key === key;
    });
}

export const FILTERED_DEFAULT_LANGUAGE: ILanguage = FILTERED_LANGUAGE(DEFAULT_LANGUAGE);
