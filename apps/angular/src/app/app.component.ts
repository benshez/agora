import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';

declare const require: any;

@Component({
    moduleId: module.id,
    selector: 'agora-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    private menuItems: Array<IAppRoute> = Config.ROUTES();
    private defaultLanguage: string = Config.DEFAULT_LANGUAGE();

    constructor(private translate: TranslateService) {
        this.onCreateTranslations();
    }

    onCreateTranslations() {
        this.translate.setTranslation(
            this.defaultLanguage,
            require(`../assets/i18n/${this.defaultLanguage}.json`)
        );
        this.translate.setDefaultLang(this.defaultLanguage);
        this.translate.use(this.defaultLanguage);
    }
}
