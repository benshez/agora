import { AgoraConfiguration } from '../constants/AgoraConfiguration';

export const AgoraConfig = {
  AgoraConfiguration,
  install(Vue, options) {
    Vue.prototype.$agoraConfig = AgoraConfiguration;
  }
};
