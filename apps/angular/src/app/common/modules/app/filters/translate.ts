import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import _ from 'lodash';
import { IAppState } from '@common/modules/app/interfaces/IAppState';
import { ILanguage } from '@common/modules/i18n/interfaces/ILanguage';

@Pipe({
    name: 'xlate'
})

export class TranslatePipe implements PipeTransform {

    constructor(public store: Store<IAppState>) { }

    transform(value: string, args: any[]): Promise<string> {
        if (!value) return;

        return new Promise(resolve => {
            this.store
                .select(s => s.i18n) //useful if you need the data once and don't want to manually cancel the subscription again
                .subscribe(
                    (state: ILanguage) => {
                        return resolve(_.get(state.translation, value));
                    })
        })
        // let x = this.store
        //     .select(s => s.i18n)
        //     .subscribe((state: ILanguage) => {
        //         debugger
        //         return _.get(state.translation, value);
        //     });
        // debugger
        // return x[0]
        // const x = this.state$.lift(state => state);

        // return this.state$.lift(state => state);
        //return this._translate.instant(value);
        //return this.store.source..value.i18n.translation[args];
    }
}
