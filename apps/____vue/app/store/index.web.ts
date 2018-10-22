import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter,
  },
  strict: false,
});

Vue.prototype.$store = store;

export default store;