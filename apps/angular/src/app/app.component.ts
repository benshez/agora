import { Component, OnInit } from '@angular/core';

import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';
import { I18NService } from '@common/modules/i18n/services';

@Component({
    moduleId: module.id,
    selector: 'agora-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    private menuItems: Array<IAppRoute> = Config.ROUTES();

    constructor(private languageService: I18NService) { }

    ngOnInit() {
        this.languageService.onCreateRoute();
    }
}
