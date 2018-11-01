
import { LanguageUnion } from '@shared/modules/i18n/store/actions';
import { ILanguage, ITranslation, en, LanguageService, InitialTranslationState } from '@shared/modules/i18n';
import {
    GET_DEFAULT_LANGUAGE,
    GET_LANGUAGE,
    UPDATE_LANGUAGE
} from '@common/base';

import * as actions from '@shared/modules/i18n/store/actions';

export function reducer(
    state: ITranslation = InitialTranslationState,
    action: LanguageUnion
): ITranslation {
    const service = new LanguageService();

    switch (action.type) {
        case GET_DEFAULT_LANGUAGE:
            return service.FILTER_LANGUAGE(service.GET_DEFAULT_LANGUAGE());

        case GET_LANGUAGE:
            return { ...state, Lang: actions.GetLanguage };

        case UPDATE_LANGUAGE:
            return service.FILTER_LANGUAGE('en');

        default:
            return state;
    }
}

export const GetLanguageState = (state: ITranslation) => state;
