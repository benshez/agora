import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';

import App from './views/App.web.vue';

import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';

Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);

new Vue({
  el: '#app',
  // router: routes,
  // store,
  computed: {},
  render: h => h(App)
});
