import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import _ from 'lodash';

import { IAppRoute } from '@common/utils/interfaces/IAppRoute';

@Component({
    moduleId: module.id,
    selector: 'agora-menu',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class MenuComponent {
    @Input()
    public items: Array<IAppRoute>;

    constructor(private router: Router) {
        this.onRouteChange();
    }

    onRouteChange() {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                switch (event.urlAfterRedirects) {
                }
            }
        });
    }

    menuItems(items: any, childrenOnly: boolean): any {
        const _menuItems: Array<any> = [];

        _.map(items, function (o) {
            if (childrenOnly && o.children.length !== 0) {
                _menuItems.push(o);
            } else if (!childrenOnly && o.children.length === 0) {
                _menuItems.push(o);
            }
        });

        return _menuItems;
    }
}
