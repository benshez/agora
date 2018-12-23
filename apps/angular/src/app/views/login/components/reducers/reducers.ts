import { IUser } from '@views/login/interfaces/IUser';
import { InitialUserState } from '@views/login/components/states';
import { Actions, ActionTypes } from '@views/login/components/actions/actions';

export function reducer(
    state: IUser = InitialUserState,
    action: Actions
): IUser {
    switch (action.type) {
        case ActionTypes.LOGIN:
            const query = action.payload;
            return state;
        default:
            return state;
    }
}
