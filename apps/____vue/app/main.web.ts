import Vue from 'vue';
import router from './router/index.web';
import store from './store/index.web';

Vue.config.silent = !false

new Vue({

  router,
  template: `<div><router-view/></div>`,

  store,

}).$mount();
