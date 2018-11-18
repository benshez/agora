import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromI18n from '@common/modules/i18n/utilities/common';
import { IAppState } from '@common/modules/app/interfaces';
import { environment } from '@environments/environment';

export const reducers: ActionReducerMap<IAppState> = {
    i18n: fromI18n.reducer
};

export function logger(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
    return function (state: IAppState, action: any): IAppState {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [logger, storeFreeze] : [];
