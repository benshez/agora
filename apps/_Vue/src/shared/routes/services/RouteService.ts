import _ from 'lodash';
import { IRoute } from '../';
import { RouteConfig } from 'vue-router';
export class RouteService {
  public GET_ROUTES(routes: string): Array<IRoute> {
    return this.FILTER_ROUTES(routes);
  }

  public FILTER_ROUTES(routes: string): Array<IRoute> {
    return _.filter(routes, function(route: RouteConfig) {
      return route.path !== '*' && route.path !== '/';
    });
  }
}
