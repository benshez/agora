import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';
import { ILanguage, ITranslation, en, LanguageService, InitialTranslationState } from '@shared/modules/i18n';
import {
    GET_DEFAULT_LANGUAGE,
    GET_LANGUAGE,
    UPDATE_LANGUAGE
} from '@common/base';

@Injectable()
export class LanguageEffects {
    @Effect()
    someEffect$: Observable<Action> = this.actions$
        .ofType(GET_DEFAULT_LANGUAGE)
        .pipe(map(action => action.payload), map(() => new AnotherAction()));

    constructor(private actions$: Actions) { }
}
