import { RouterReducerState } from '@ngrx/router-store';
import { ILanguage } from '@common/modules/i18n/interfaces/ILanguage';
import { IUser } from '@views/login/interfaces/IUser';

export interface IRootState {
    router?: RouterReducerState;
    language: ILanguage;
    user: IUser;
}
