import { RouteConfig } from 'vue-router';
import { IRootState } from '../../base';

export interface IDisplayRoutesParameters {
  routes: Array<RouteConfig>;
  state: IRootState;
}
