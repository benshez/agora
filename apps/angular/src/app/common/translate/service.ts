import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { map, filter, scan, mergeMap } from 'rxjs/operators';

import { Config } from '@common/utils/Config';

import { Observable } from 'rxjs';

declare var require: NodeRequire;

@Injectable()
export class AgoraLanguageService {
    private defaultLanguage: string = Config.DEFAULT_LANGUAGE();
    private selectedLanguage: string = '';
    private selectedRoutePath: string = '';
    private appKey: string = 'AgoraApp';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private translate: TranslateService,
        private titleService: Title) { }

    public onCreateRoute(): void {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map((route) => {
                while (route.firstChild) route = route.firstChild;
                this.selectedRoutePath = route.routeConfig.path;
                return route;
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data))
            .subscribe((event) => { this.onChangeTitle(this.selectedRoutePath) });
    }

    public onCreateTranslations(language?: string): void {
        this.selectedLanguage = language || this.defaultLanguage;

        this.translate.setTranslation(
            this.selectedLanguage,
            require(`../../../assets/i18n/${this.selectedLanguage}.json`)
        );

        this.translate.setDefaultLang(this.defaultLanguage);

        this.translate.use(this.selectedLanguage);
    }

    public onChangeTitle(key?: string): void {
        key = key || this.appKey;

        this.translate.get(this.appKey).subscribe((app: string) => {
            this.translate.get(key).subscribe((res: any) => {
                this.titleService.setTitle(`${app} - ${res.title}`);
            });
        });
    }

    public onTranslationObservable(): Observable<any> {
        let onTranslation: Observable<any> = this.translate.use(this.selectedLanguage);

        onTranslation.subscribe(() => {
            this.onChangeTitle(this.selectedRoutePath);
        });

        return onTranslation;
    }
}
