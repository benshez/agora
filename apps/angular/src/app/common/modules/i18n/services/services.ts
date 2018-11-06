import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, filter, scan, mergeMap } from 'rxjs/operators';

import _ from 'lodash';

import { ILanguage, ITranslation } from '@common/modules/i18n/interfaces/index';
import { WindowService } from '@common/services/window/service';
import { IAppState } from '@common/modules/app/interfaces/index';
import { ChangeAction } from '@common/modules/i18n/actions/index';

import { en, af } from '@common/modules/i18n/languages';

export const DEFAULT_LANGUAGE: string = 'en';

export const LANGUAGES: Array<ILanguage> = [
    en,
    af
];

export function FILTERED_LANGUAGE(key: string) {
    return _.find(LANGUAGES, function (o) {
        return o.key === key;
    });
};

export function TITLE_CASE(input: string): string {
    if (!input) {
        return '';
    } else {
        return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
    }
}

export const FILTERED_DEFAULT_LANGUAGE: ILanguage = FILTERED_LANGUAGE(DEFAULT_LANGUAGE);

@Injectable()
export class I18NService {

    private transformedText: ITranslation;
    private selectedRoutePath: string = '';
    private appNameKey: string = 'AppName';

    constructor(
        private win: WindowService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private store: Store<IAppState>
    ) {
        this.store
            .select(s => s.i18n)
            .subscribe((state: ILanguage) => {
                FILTERED_LANGUAGE(state.key);
            });

        this.store.dispatch(new ChangeAction(DEFAULT_LANGUAGE));
    }

    transform(value: string): string {
        this.store
            .select(s => s.i18n)
            .subscribe((translation: ILanguage) => {
                this.transformedText = translation.translation;
            });

        return this.filterTransform(this.transformedText, value);
    }

    filterTransform(translation: ITranslation, key: string) {
        return _.get(translation, key);
    }

    public onCreateRoute(): void {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map((route) => {
                while (route.firstChild) route = route.firstChild;
                debugger
                this.selectedRoutePath = route.routeConfig.path;
                return route;
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data))
            .subscribe((event) => { this.onChangeTitle(this.selectedRoutePath) });
    }

    public onChangeTitle(key?: string): void {
        key = key || this.appNameKey;
        //'Menu' + TITLE_CASE(key) + 'MenuItemText'


        const translated: string = this.transform(`Menu.${TITLE_CASE(key)}MenuItemText`);
        const app: string = this.transform(`${this.appNameKey}`)
        this.titleService.setTitle(`${app} - ${translated}`);
        debugger
        // this.translate.get(this.appKey).subscribe((app: string) => {
        //     this.translate.get(key).subscribe((res: any) => {
        //         this.titleService.setTitle(`${app} - ${res.title}`);
        //     });
        // });
    }
}
