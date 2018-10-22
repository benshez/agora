import { RouteConfig } from 'vue-router';
import WebAbout from './About.web.vue';

export const WebAboutRoute: RouteConfig = {
  path: '/about',
  component: WebAbout,
  meta: {
    translationKey: 'AboutMenuItemText',
    description: 'About'
  }
};
