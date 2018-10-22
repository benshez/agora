import { IApplicationRoutes } from '../';

export interface IAppSettings {
  API: string;
  APP_NAME: string;
  APP_NAME_TO_UPPER: string;
  APP_ROUTES: IApplicationRoutes;
  STORE_NAMESPACED: boolean;
  STORE_STRICT_MODE: boolean;
}
