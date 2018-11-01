import {
    Injectable,
    Inject
} from '@angular/core';
import {
    Action
} from '@ngrx/store';
import {
    Effect,
    Actions
} from '@ngrx/effects';
import {
    includes,
    map
} from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {
    I18NService,
    Languages
} from '@common/modules/i18n/services/index';
import * as actions from '@common/modules/i18n/actions/index';

@Injectable()
export class I18NEffects {
    debugger;
    @Effect() change$: Observable<Action> = this.actions$
        .ofType<actions.ChangeAction>(actions.ActionTypes.CHANGE)
        .map(action => {
            const lang = action.payload;
            if (includes(map(this.languages, 'code'), lang)) {
                const langChangedAction = new actions.LangChangedAction(lang);
                this.service.track(langChangedAction.type, { label: langChangedAction.payload });
                return new actions.LangChangedAction(lang);
            } else {
                return new actions.LangUnsupportedAction(lang);
            }
        });

    constructor(
        private actions$: Actions,
        private service: I18NService,
        @Inject(Languages) private languages
    ) { }
}
