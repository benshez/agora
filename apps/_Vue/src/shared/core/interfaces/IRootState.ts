import { IUser } from '../../user/interfaces/IUser';
import { ILanguage } from '../../i18n/interfaces/ILanguage';
import { IRoute } from '../../routes/interfaces/IRoute';
import { IDynanicComponent } from '../../events'

export interface IRootState {
  user: IUser;
  language: ILanguage;
  routes: IRoute;
  dynamicComponent: IDynanicComponent;
}
