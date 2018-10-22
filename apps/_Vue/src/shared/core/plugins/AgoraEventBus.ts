export const AgoraEventBus = {
  install(Vue, options) {
    Vue.prototype.$agoraEventBus = new Vue();
  }
};
