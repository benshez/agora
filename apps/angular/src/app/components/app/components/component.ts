import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { I18nResolver } from 'i18n-ts';

import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';
import { I18NService } from '@common/modules/i18n/services';
import { MenuService } from '@components/menu/components/services/services';

import { en, af, LogService } from '@common/index';

@Component({
    moduleId: module.id,
    selector: 'agora-app',
    templateUrl: 'component.html'
})
export class AppComponent implements OnInit {
    public menuItems: Array<IAppRoute> = Config.ROUTES();

    @ViewChild('drawer') public drawer: MatSidenav;

    constructor(
        private languageService: I18NService,
        private menuService: MenuService,
        private loggerService: LogService,
    ) {
        const i18n = {
            en: en,
            af: af,
            default: en
        };
        const messages = new I18nResolver(i18n, "af").translation;
        //messages.translation.AppStarted('dasd')

        this.loggerService.info(messages.translation.AppStarted('dasd'))
    }

    ngOnInit() {
        this.menuService.setSidenav(this.drawer);
        this.languageService.onCreateRoute();
    }
}
