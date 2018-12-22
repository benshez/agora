import { RouterReducerState } from '@ngrx/router-store';
import { ILanguage } from '@common/modules/i18n/interfaces';

export interface IAppState {
    router?: RouterReducerState;
    i18n: ILanguage;
}
