import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


import { map, filter, scan, mergeMap } from 'rxjs/operators';

import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';

declare const require: any;

@Component({
    moduleId: module.id,
    selector: 'agora-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private menuItems: Array<IAppRoute> = Config.ROUTES();
    private defaultLanguage: string = Config.DEFAULT_LANGUAGE();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private translate: TranslateService,
        private titleService: Title) { }

    ngOnInit() {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map((route) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data))
            .subscribe((event) => this.titleService.setTitle(event['title']));

        this.onCreateTranslations();
    }

    private onCreateTranslations(): void {
        this.translate.setTranslation(
            this.defaultLanguage,
            require(`../assets/i18n/${this.defaultLanguage}.json`)
        );
        this.translate.setDefaultLang(this.defaultLanguage);
        this.translate.use(this.defaultLanguage);
        this.onChangeTitle();
    }

    private onChangeTitle(): void {
        this.translate.get('AgoraApp').subscribe((res: string) => {
            this.titleService.setTitle(res);
        });
    }
}
