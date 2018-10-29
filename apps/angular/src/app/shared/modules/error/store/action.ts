import { Action } from '@ngrx/store';
import { ERROR_OCCURRED } from '@common/base/store/mutations';
import { IError } from '@shared/modules/error/interfaces/IError';

export class ErrorOccurred implements Action {
    readonly type = ERROR_OCCURRED;

    constructor(
        readonly payload: {
            action?: Action;
            error?: IError;
        },
    ) { }
}
