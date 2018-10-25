import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core';

import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';
import { ProgressBarService } from '@shared/services/bar/service';

declare var require: NodeRequire;
declare var __DEBUG_MODE__: any;

@Component({
    moduleId: module.id,
    selector: 'agora-header',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() drawerToggle = new EventEmitter<boolean>();

    private menuItems: Array<IAppRoute> = Config.ROUTES();
    progressBarMode: string;
    currentLang: string;

    constructor(
        private progressBarService: ProgressBarService,
        private translateService: TranslateService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.currentLang = this.translateService.currentLang;
        this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
            this.progressBarMode = mode;
        });
    }

    onToggleDrawer() {
        this.drawerToggle.emit(true);
    }

    onLanguageChange(language: string): void {
        this.translateService.setTranslation(
            language,
            require(`../../../../../assets/i18n/${language}.json`)
        );
        this.translateService.use(language).subscribe(() => {
            this.loadMenus();
            this.onChangeTitle();
        });
    }

    private loadMenus(): void {
        this.menuItems = Config.ROUTES();
    }

    private onChangeTitle(): void {
        this.translateService.get('AgoraApp').subscribe((res: string) => {
            this.titleService.setTitle(res);
        });
    }
}
