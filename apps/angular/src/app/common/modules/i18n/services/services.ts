import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, filter, scan, mergeMap } from 'rxjs/operators';

import _ from 'lodash';

import { ILanguage, ITranslation } from '@common/modules/i18n/interfaces/index';
import { WindowService } from '@common/services/window/service';
import { IAppState } from '@common/modules/app/interfaces/index';
import { ChangeAction } from '@common/modules/i18n/actions/index';

import { en, af } from '@common/modules/i18n/languages';

export const DEFAULT_LANGUAGE = 'en';

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
        return _.replace(input, /\w\S*/g, (txt => _.replace(_.startCase(_.toLower(_.replace(txt, '-', ' '))), ' ', '.')));
    }
}

export const FILTERED_DEFAULT_LANGUAGE: ILanguage = FILTERED_LANGUAGE(DEFAULT_LANGUAGE);

@Injectable()
export class I18NService {

    private transformedText: ITranslation;
    private selectedRoutePath = '';
    private appNameKey = 'AppName';

    constructor(
        private win: WindowService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private store: Store<IAppState>,
        private location: Location
    ) {
        this.store
            .select(s => s.i18n)
            .subscribe((state: ILanguage) => {
                FILTERED_LANGUAGE(state.key);
                this.onChangeTitle(this.location.path());
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
                while (route.firstChild) { route = route.firstChild };
                this.selectedRoutePath = route.routeConfig.path;
                return route;
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data))
            .subscribe((event) => { this.onChangeTitle(this.selectedRoutePath) });
    }

    public onChangeTitle(key?: string): void {
        key = key || this.appNameKey;
        key = _.replace(_.replace(key, /\//g, ''), /-/g, '.');
        // key = _.replace(key, /-/g, '.')

        // const translated: string = this.transform(`menu.${TITLE_CASE(key)}.description`);
        const translated: string = this.transform(`menu.${(key)}.description`);
        const app: string = this.transform(`${this.appNameKey}`)
        this.titleService.setTitle(`${app} - ${translated}`);
    }
}
