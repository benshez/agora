import Vue from 'vue';
import Vuetify from 'vuetify';

import App from 'views/App.web.vue';
import { WEB_ROUTES } from 'modules/router/web';

import './styles';

Vue.config.silent = __MODE__ === 'production'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router: WEB_ROUTES,
  render: h => h(App)
});
