import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ILanguage } from '@common/modules/i18n/interfaces/ILanguage';
import { getLanguagesFromState } from '@common/modules/i18n/states/states';

export * from '@common/modules/i18n/states/states';

export const getLanguageState = createFeatureSelector<Observable<ILanguage>>('Language');

export const getLanguages = createSelector(getLanguageState, getLanguagesFromState);
