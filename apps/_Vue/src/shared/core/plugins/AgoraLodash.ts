import lodash from 'lodash';

export const AgoraLodash = {
  install: function(Vue, options) {
    Vue.prototype.$agoraLodash = lodash;
  }
};
