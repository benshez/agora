import { ILanguage } from '@common/modules/i18n/interfaces/index';
import { InitialI18NState } from '@common/modules/i18n/states/index';
import { Actions, ActionTypes } from '@common/modules/i18n/actions/index';

import { RESOLVE_LANGUAGE } from '@common/modules/i18n/services/services';

export function reducer(
    state: ILanguage = InitialI18NState,
    action: Actions
): ILanguage {
    switch (action.type) {
        case ActionTypes.LANG_CHANGED:
            const query = action.payload;

            if (state.key !== query) {
                return (<any>Object).assign(
                    {},
                    state,
                    RESOLVE_LANGUAGE(query)
                );
            }
            return state;
        default:
            return state;
    }
}
