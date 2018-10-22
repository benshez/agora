import { Component, Input } from '@angular/core';

import { IAppRoute } from '@common/utils/interfaces/IAppRoute';

@Component({
    moduleId: module.id,
    selector: 'agora-menu-item',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class MenuItemComponent {
    @Input()
    item: IAppRoute;
}
