import { Action } from '@ngrx/store';
import { CATEGORY } from '@common/modules/i18n/common/index';
import { IUserActions } from '@views/login/interfaces/IUserActions';

export const ActionTypes: IUserActions = {
    LOGIN: `[${CATEGORY}] Change`,
    LOGOUT: `[${CATEGORY}] Changed`,
    UPDATE: `[${CATEGORY}] Changed`,
};

export class LoginAction implements Action {
    readonly type = ActionTypes.LOGIN;

    constructor(public payload: string) { }
}

export class LogoutAction implements Action {
    readonly type = ActionTypes.LOGOUT;

    constructor(public payload: string) { }
}

export class UpdateAction implements Action {
    readonly type = ActionTypes.UPDATE;

    constructor(public payload: string) { }
}

export type Actions = LoginAction | LogoutAction | UpdateAction;
