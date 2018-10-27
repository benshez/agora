import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';
import { ProgressBarService } from '@shared/services/bar/service';

import { AgoraLanguageService } from '@common/translate/service';

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

    constructor(
        private progressBarService: ProgressBarService,
        private languageService: AgoraLanguageService
    ) { }

    ngOnInit() {
        this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
            this.progressBarMode = mode;
        });
    }

    onToggleDrawer() {
        this.drawerToggle.emit(true);
    }

    onLanguageChange(language: string): void {
        this.languageService.onCreateTranslations(language)
        this.languageService.onTranslationObservable().subscribe(() => {
            this.loadMenus();
        });
    }

    private loadMenus(): void {
        this.menuItems = Config.ROUTES();
    }
}
