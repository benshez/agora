import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';

import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';
import { I18NService } from '@common/modules/i18n/services';
import { MenuService } from '@components/menu/components/services/services';
import { LogService } from '@common/modules/logger/services/service';
import { en } from '@common/modules/i18n/languages';

@Component({
    moduleId: module.id,
    selector: 'agora-app',
    templateUrl: 'component.html'
})
export class AppComponent implements OnInit {
    private menuItems: Array<IAppRoute> = Config.ROUTES();

    @ViewChild('drawer') public drawer: MatSidenav;

    constructor(
        private languageService: I18NService,
        private menuService: MenuService,
        private loggerServicer: LogService
    ) {
        this.loggerServicer.info(`${en.translation.AppName} Started on ${Date.now()}`);
    }

    ngOnInit() {
        this.menuService.setSidenav(this.drawer);
        this.languageService.onCreateRoute();
    }
}