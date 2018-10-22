import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { IAppRoute } from '@common/utils/interfaces/IAppRoute';

@Component({
    moduleId: module.id,
    selector: 'agora-menu',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class MenuComponent {
    @Input()
    items: Array<IAppRoute>;

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
}
