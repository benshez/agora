import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { I18NService } from '@common/modules/i18n/services/index';
import * as actions from '@common/modules/i18n/actions/index';

@Injectable()
export class I18NEffects {

    @Effect() change$: Observable<Action> = this.actions$.pipe(
        ofType<actions.ChangeAction>(actions.ActionTypes.CHANGE),
        map(action => {
            const lang = action.payload;
            // if (includes(map(this.languages, 'code'), lang)) {
            //     const langChangedAction = new actions.LangChangedAction(lang);
            //     //this.service.track(langChangedAction.type, { label: langChangedAction.payload });
            //     return new actions.LangChangedAction(lang);
            // } else {
            //     return new actions.LangUnsupportedAction(lang);
            // }
            return new actions.LangUnsupportedAction(lang);
        }));

    constructor(
        private actions$: Actions,
        private service: I18NService,
    ) { }
}
