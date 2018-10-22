import { RouteConfig } from 'vue-router';
import WebHome from './Home.web.vue';

export const WebHomeRoute: RouteConfig = {
  path: '/',
  component: WebHome,
  meta: {
    translationKey: 'HomeMenuItemText',
    description: 'Home'
  }
};
