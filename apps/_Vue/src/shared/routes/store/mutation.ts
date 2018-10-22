import { MutationTree } from 'vuex';
import * as mutationTypes from '../../core/store/mutationTypes';
import { IRoute } from '../';

export const mutations: MutationTree<Array<IRoute>> = {
  [mutationTypes.GET_ROUTES](state: Array<IRoute>, lang: IRoute) {
    Object.assign(state, lang);
    return lang;
  }
};
