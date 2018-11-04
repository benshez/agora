import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '@common/modules/app/interfaces/IAppState';
import { ILanguage } from '@common/modules/i18n/interfaces/ILanguage';

@Pipe({
    name: 'translate'
})

export class TranslatePipe implements PipeTransform {
    constructor(public state$: Observable<ILanguage>) { debugger }

    transform(query: string): Observable<ILanguage> {
        debugger
        if (!this.state$) return null;
        if (!query) return null;
        const x = this.state$.lift(state => state);

        return this.state$.lift(state => state);
        //return this.store.source..value.i18n.translation[args];
    }
}
