import Vue, { registerElement } from 'nativescript-vue';
import platformModule = require('tns-core-modules/platform');

import App from 'views/App.native.vue';
import NATIVE_ROUTES from 'modules/router/native';

registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
registerElement('RadListView', () => require('nativescript-ui-listview').RadListView);

Vue.config.silent = __MODE__ === 'production';

Vue.prototype.$isAndroid = platformModule.isAndroid;
Vue.prototype.$isIOS = platformModule.isIOS;

new Vue({
  //router: NATIVE_ROUTES,
  computed: {
    pageClasses: function () {
      return {
        'platform-ios': platformModule.isIOS,
        'platform-android': platformModule.isAndroid
      };
    },
  },
  render: h => h('frame', [h(App)])
}).$start();
