import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatSidenav } from '@angular/material';

import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';
import { I18NService } from '@common/modules/i18n/services';
import { MenuService } from '@components/menu/components/services/services';

import { en, DateFormatPipe, TimeFormatPipe, LogService } from '@common/index';

@Component({
    moduleId: module.id,
    selector: 'agora-app',
    templateUrl: 'component.html',
    providers: [DateFormatPipe, TimeFormatPipe]
})
export class AppComponent implements OnInit {
    private menuItems: Array<IAppRoute> = Config.ROUTES();

    @ViewChild('drawer') public drawer: MatSidenav;

    constructor(
        private languageService: I18NService,
        private menuService: MenuService,
        private loggerServicer: LogService,
        private datePipe: DateFormatPipe,
        private timePipe: TimeFormatPipe,
        private snackBar: MatSnackBar
    ) {
        const message = `${en.translation.AppName} Started on ${this.datePipe.transform(Date.now())} at ${this.timePipe.transform(Date.now())}`;
        this.snackBar.open(message, '', {
            duration: 1000,
        });
        this.loggerServicer
            .info(message);
    }

    ngOnInit() {
        this.menuService.setSidenav(this.drawer);
        this.languageService.onCreateRoute();
    }
}
