import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { Observable } from 'rxjs/Observable';

import * as fromI18n from '@common/modules/i18n/utilities/common';

import { IAppState } from '@common/modules/app/interfaces';

export const reducers: ActionReducerMap<IAppState> = {
    i18n: fromI18n.reducer
};

export function logger(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
    return function (state: IAppState, action: any): IAppState {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<IAppState>[] = !true ? [logger, storeFreeze] : [];

export const getI18NState = createFeatureSelector<Observable<fromI18n.I18NState>>('Language');

export const getLang = createSelector(getI18NState, fromI18n.getLang);
