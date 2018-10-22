import { RouteConfig } from 'vue-router';
import WebLogin from './Login.web.vue';

export const WebLoginRoute: RouteConfig = {
  path: '/login',
  component: WebLogin,
  meta: {
    translationKey: 'LoginMenuItemText',
    description: 'Login'
  }
};
