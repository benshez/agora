import { RouteConfig } from 'vue-router';

import { WebHomeRoute } from 'views/home';
import { WebAboutRoute } from 'views/about';
import { WebLoginRoute } from 'views/login';
import { WebNotFoundRoute } from 'views/error';

export const WebRoutes: Array<RouteConfig> = [
  WebHomeRoute,
  WebAboutRoute,
  WebLoginRoute,
  WebNotFoundRoute
];

