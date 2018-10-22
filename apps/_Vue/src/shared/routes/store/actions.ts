import { AxiosResponse, AxiosError } from 'axios';
import { RouteConfig } from 'vue-router';
import { ActionTree } from 'vuex';
import { IRoute, RouteService } from '../';
import { IRootState } from '../../core';
import * as mutationTypes from '../../core/store/mutationTypes';

export const actions: ActionTree<Array<IRoute>, IRootState> = {
  [mutationTypes.GET_ROUTES]({ commit }, routes: string) {
    commit(mutationTypes.GET_ROUTES, new RouteService().GET_ROUTES(routes));
  }
};
