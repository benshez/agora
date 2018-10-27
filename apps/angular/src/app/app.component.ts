import { Component, OnInit } from '@angular/core';

import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';
import { AgoraLanguageService } from '@common/translate/service';

@Component({
    moduleId: module.id,
    selector: 'agora-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private menuItems: Array<IAppRoute> = Config.ROUTES();

    constructor(private languageService: AgoraLanguageService) { }

    ngOnInit() {
        this.languageService.onCreateTranslations();
        this.languageService.onCreateRoute();
    }
}
