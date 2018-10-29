import { Module } from 'vuex';
import { IRootState } from '../../base/';
import { ITranslation } from '../';
import { mutations } from './mutation';
import { actions } from './actions';
import { state } from './state';
import { getters } from './getters';
import { AgoraConfiguration } from '../../core/constants/AgoraConfiguration';

export const language: Module<ITranslation, IRootState> = {
  namespaced: AgoraConfiguration.APP_SETTINGS.STORE_NAMESPACED,
  state,
  getters,
  mutations,
  actions
};
