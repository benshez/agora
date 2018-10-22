import { RouteConfig } from 'vue-router';
import WebNotFound from './NotFound.web.vue';

export const WebNotFoundRoute: RouteConfig = {
  path: '*',
  component: WebNotFound,
  meta: {
    description: 'NotFound'
  }
};
