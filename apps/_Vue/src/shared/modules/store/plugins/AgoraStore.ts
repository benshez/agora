import store from '../';

export const AgoraStore = {
  store,
  install(Vue, options) {
    Vue.prototype.$agoraStore = store;
  }
};
