import { Action } from '@ngrx/store';
import { CATEGORY } from '@common/modules/i18n/common/index';
import { I18NActions } from '@common/modules/i18n/interfaces/index';

export const ActionTypes: I18NActions = {
    CHANGE: `[${CATEGORY}] Change`,
    LANG_CHANGED: `[${CATEGORY}] Changed`,
    LANG_UNSUPPORTED: `[${CATEGORY}] Lang Unsupported`
};

export class ChangeAction implements Action {
    readonly type = ActionTypes.CHANGE;

    constructor(public payload: string) { }
}

export class LangChangedAction implements Action {
    readonly type = ActionTypes.LANG_CHANGED;

    constructor(public payload: string) { }
}

export class LangUnsupportedAction implements Action {
    readonly type = ActionTypes.LANG_UNSUPPORTED;

    constructor(public payload: string) { }
}

export type Actions = ChangeAction | LangChangedAction | LangUnsupportedAction;
