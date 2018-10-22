import { MutationTree } from 'vuex';
import * as mutationTypes from '../../core/store/mutationTypes';
import { ITranslation } from '../';

export const mutations: MutationTree<ITranslation> = {
  [mutationTypes.GET_LANGUAGE](state: ITranslation, lang: ITranslation) {
    Object.assign(state, lang);
    return lang;
  },
  [mutationTypes.UPDATE_LANGUAGE](state: ITranslation, lang: ITranslation) {
    Object.assign(state, lang);
  }
};
