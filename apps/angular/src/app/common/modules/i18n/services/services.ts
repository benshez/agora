import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, filter, scan, mergeMap } from 'rxjs/operators';
import { I18nResolver } from 'i18n-ts';

import _ from 'lodash';

import { Config } from '@common/utils/Config';
import { ILanguage, ITranslation } from '@common/modules/i18n/interfaces/index';
import { WindowService } from '@common/services/window/service';
import { IRootState } from '@common/base/interfaces/IRootState';
import { ChangeAction } from '@common/modules/i18n/actions/index';

import { en, af } from '@common/modules/i18n/languages';

export function TITLE_CASE(input: string): string {
    if (!input) {
        return '';
    } else {
        return _.replace(input, /\w\S*/g, (txt => _.replace(_.startCase(_.toLower(_.replace(txt, '-', ' '))), ' ', '.')));
    }
}

export const CURRENT_LANGUAGES = {
    en: en,
    af: af,
    default: en
};

export function RESOLVE_LANGUAGE(languageKey): ILanguage {
    return new I18nResolver(CURRENT_LANGUAGES, languageKey).translation;
}

export const FILTERED_DEFAULT_LANGUAGE: ILanguage = CURRENT_LANGUAGES.default;

export const LANGUAGES: Array<ILanguage> = [
    CURRENT_LANGUAGES.en,
    CURRENT_LANGUAGES.af
];

@Injectable({
    providedIn: 'root'
})
export class I18NService {

    private transformedText: ITranslation;
    private selectedRoutePath = '';
    private appNameKey = 'AppName';
    private languageKey: string = FILTERED_DEFAULT_LANGUAGE.key;

    constructor(
        private win: WindowService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private store: Store<IRootState>,
        private location: Location
    ) {
        this.store
            .select(s => s.language)
            .subscribe((state: ILanguage) => {
                RESOLVE_LANGUAGE(state.key);
                if (Config.IS_WEB()) { this.onChangeTitle(this.location.path()) };
            });

        this.store.dispatch(new ChangeAction(FILTERED_DEFAULT_LANGUAGE.key));
    }

    transform(value: string): string {
        this.store
            .select(s => s.language)
            .subscribe((state: ILanguage) => {
                this.transformedText = state.translation;
            });

        return this.filterTransform(this.transformedText, value);
    }

    filterTransform(translation: ITranslation, key: string) {
        return _.get(translation, key);
    }

    getCurrentResolvedLanguage(): ILanguage {
        this.store
            .select(s => s.language)
            .subscribe((state: ILanguage) => {
                this.languageKey = state.key;
            });

        return RESOLVE_LANGUAGE(this.languageKey);
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
