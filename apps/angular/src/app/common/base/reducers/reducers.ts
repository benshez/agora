import { ActionReducerMap, ActionReducer, MetaReducer, combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { IRootState } from '@common/base/interfaces/IRootState';
import { reducer as languageReducer } from '@common/modules/i18n/reducers';
import { reducer as userReducer } from '@views/login/components/reducers/reducers';
import { environment } from '@environments/environment';
import { LOGGER_MODULE_FOR_ROOT } from '@common/modules/logger/module';

export const APP_ROOT_REDUCER: ActionReducerMap<IRootState> = {
    router: routerReducer,
    language: languageReducer,
    user: userReducer
};

let loggerModule = null;
let loggerService = null;
let loggerHttp = null;
let loggerMatSnackBar = null;

export function logger(reducer: ActionReducer<IRootState>): ActionReducer<IRootState> {
    return function (state: IRootState, action: any): IRootState {
        if (!loggerModule) loggerModule = LOGGER_MODULE_FOR_ROOT;
        if (!loggerService) {
            if (!loggerHttp) loggerHttp = loggerModule[0].providers[0].deps[0];
            if (!loggerMatSnackBar) loggerMatSnackBar = loggerModule[0].providers[0].deps[1];

            loggerService = new loggerModule[0].providers[0].provide(loggerHttp);
        }
        const previousState = state;
        const currentState = reducer(state, action);

        const logInfo = {
            'state': {
                'Action': action,
                'Previous state': previousState,
                'Current state': currentState
            }
        }

        loggerService.info(logInfo);

        return currentState;
    };
}

export const APP_META_REDUCER: Array<MetaReducer<IRootState>> = !environment.production ? [logger, storeFreeze] : [];
