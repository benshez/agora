import { ActionReducerMap, ActionReducer, MetaReducer, combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { IRootState } from '@common/base/interfaces/IRootState';
import { reducer as languageReducer } from '@common/modules/i18n/reducers';
import { reducer as userReducer } from '@views/login/components/reducers/reducers';
import { ConsoleService } from '@common/modules/logger/targets/console/services/service';
import { environment } from '@environments/environment';

export const rootReducer: ActionReducerMap<IRootState> = {
    router: routerReducer,
    language: languageReducer,
    user: userReducer
};

export function logger(reducer: ActionReducer<IRootState>): ActionReducer<IRootState> {
    return function (state: IRootState, action: any): IRootState {
        const loggerService = new ConsoleService();

        const currentState = state;
        const nextState = reducer(state, action);

        loggerService.info({ Action: action });
        loggerService.info({ 'Previous state': currentState })
        loggerService.info({ 'Current state': nextState });

        return nextState;
    };
}

export const metaReducers: Array<MetaReducer<IRootState>> = !environment.production ? [logger, storeFreeze] : [];
