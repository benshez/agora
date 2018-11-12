import { Component, Input } from '@angular/core';

import { IAppRoute } from '@common/utils/interfaces/IAppRoute';
import { MenuService } from '@components/menu/components/services/services';

@Component({
    moduleId: module.id,
    selector: 'agora-menu-item',
    templateUrl: 'component.html',
    styleUrls: ['component.scss']
})
export class MenuItemComponent {
    @Input()
    item: IAppRoute;


    constructor(
        private menuService: MenuService
    ) { }

    toggleMenu() {
        this.menuService.toggle();
    }

    public onCloseDrawerTap() {
        console.log('llllll');
    }
}
