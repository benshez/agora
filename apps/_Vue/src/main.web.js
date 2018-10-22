import Vue from 'Vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';

import Home from './components/Home';
//import Vuetify from 'Vuetify';

// import store from './shared/modules/store';
// import { routes } from './shared/modules/router';

// import { AgoraLodash } from './shared/core/plugins/AgoraLodash';
// import { AgoraConfig } from './shared/core/plugins/AgoraConfig';

import './assets/styles/styles';

// Vue.use(Vuetify, {
//   theme: {
//     primary: '#3f51b5',
//     secondary: '#b0bec5',
//     accent: '#8c9eff',
//     error: '#b71c1c'
//   },
// });
Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);
// Vue.use(AgoraLodash);
// Vue.use(AgoraConfig);

new Vue({
  el: '#app',
  VueRouter,
  // router: routes,
  // store,
  computed: {},
  render: h => h(Home),
});
