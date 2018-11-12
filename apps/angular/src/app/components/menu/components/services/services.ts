import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class MenuService {

    private drawerComponent: MatSidenav;

    public setSidenav(sideMenu: MatSidenav) {
        this.drawerComponent = sideMenu;
    }

    public open() {
        return this.drawerComponent.open();
    }

    public close() {
        return this.drawerComponent.close();
    }

    public toggle(): void {
        this.drawerComponent.toggle();
    }
}
