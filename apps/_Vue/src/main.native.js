import Vue from 'nativescript-vue';
import Home from './components/Home';

import './assets/styles/styles';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

  render: h => h(Home),

}).$start();
