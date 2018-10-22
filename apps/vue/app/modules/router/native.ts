import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

import { NativeRoutes } from 'views/native';

Vue.use(VueRouter);

const NATIVE_ROUTES = new VueRouter({
  pageRouting: true,
  routes: NativeRoutes
});

NATIVE_ROUTES.replace('/');

export default NATIVE_ROUTES;
