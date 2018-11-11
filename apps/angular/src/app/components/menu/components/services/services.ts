import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class MenuService {

    private sideMenuComponent: MatSidenav;

    public setSidenav(sideMenu: MatSidenav) {
        this.sideMenuComponent = sideMenu;
    }

    public open() {
        return this.sideMenuComponent.open();
    }

    public close() {
        return this.sideMenuComponent.close();
    }

    public toggle(): void {
        this.sideMenuComponent.toggle();
    }
}
