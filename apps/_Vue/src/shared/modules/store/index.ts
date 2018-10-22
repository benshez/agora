import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from '../../common/modules/base/interfaces/IRootState';
import { user } from '../../common/modules/user/store';
import { routes } from '../../common/modules/routes/store';
import { language } from '../../common/modules/i18n/store';
import { dynamicComponent } from '../../common/modules/events/store'
import { AgoraConfiguration } from '../../common/modules/core/constants/AgoraConfiguration';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user, language, routes, dynamicComponent },
  strict: AgoraConfiguration.APP_SETTINGS.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
