import { ActionReducerMap, ActionReducer, MetaReducer, combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { IRootState } from '@common/base/interfaces/IRootState';
import { reducer as languageReducer } from '@common/modules/i18n/reducers';
import { reducer as userReducer } from '@views/login/components/reducers/reducers';
import { ConsoleService } from '@common/modules/logger/targets/console/services/service';
import { environment } from '@environments/environment';
import { LOGGER_MODULE_FOR_ROOT } from '@common/modules/logger/module';

export const APP_ROOT_REDUCER: ActionReducerMap<IRootState> = {
    router: routerReducer,
    language: languageReducer,
    user: userReducer
};

export function logger(reducer: ActionReducer<IRootState>): ActionReducer<IRootState> {
    return function (state: IRootState, action: any): IRootState {
        const loggerService = LOGGER_MODULE_FOR_ROOT

        debugger
        // const logger = LOGGER_MODULE_FOR_ROOT;

        //const loggerService = new ConsoleService();
        //debugger
        //logger[0].providers[0].provide
        const currentState = state;
        const nextState = reducer(state, action);
        const logInfo = {
            'state': {
                'Action': action,
                'Previous state': currentState,
                'Current state': nextState
            }
        }
        //loggerService.info(logInfo);

        return nextState;
    };
}

export const APP_META_REDUCER: Array<MetaReducer<IRootState>> = !environment.production ? [logger, storeFreeze] : [];
