import { I18NState } from '@common/modules/i18n/interfaces/index';
import { InitialState } from '@common/modules/i18n/states/index';
import { Actions, ActionTypes } from '@common/modules/i18n/actions/index';

export function reducer(
    state: I18NState = InitialState,
    action: Actions
): I18NState {
    switch (action.type) {
        case ActionTypes.LANG_CHANGED:
            const query = action.payload;
            if (state.lang !== query) {
                return (<any>Object).assign({}, state, {
                    lang: query
                });
            }
            return state;
        default:
            return state;
    }
}
