import Vue from 'vue';
import VueRouter from 'vue-router';

import { AppRoutes } from '../../views';

Vue.use(VueRouter);

export const routes = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: AppRoutes
});

// // routes.push({ path: 'home', query: { lang: 'en' } });
// routes.beforeEach((to, from, next) => {
//   // debugger;
//   // const route = Object.assign({}, to);
//   // route.params.lang = 'en';
//   // //routes.push(route);
//   // //Vue.config = to.params.lang;
//   // //debugger;
//   // //routes.push({ path: 'home', query: { lang: 'en' } });
//   // //to.params.lang = 'en';
//   next();
//   // ...
// });

// routes.afterEach((to, from) => {
//   to.params.lang = 'en';
//   //Vue.config.lang = to.params.lang
// });
