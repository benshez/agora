import {
    Component,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import * as app from 'tns-core-modules/application';
import { Config } from '@common/utils/Config';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';

@Component({
    moduleId: module.id,
    selector: 'agora-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

    private menuItems: Array<IAppRoute> = Config.ROUTES();

    constructor(
        private _router: Router,
        private _changeDetectionRef: ChangeDetectorRef
    ) {

    }

    public toggle() {
        // this.drawer.toggleDrawerState();
    }

    ngAfterViewInit() {
        // this.drawer = this.drawerComponent.sideDrawer;
        // this._changeDetectionRef.detectChanges();
    }


    public onNavigationItemTap(args: any) {
        const itemIndex = args.index;
        const tappedItem = this.menuItems[itemIndex];
        console.log(tappedItem)
        const sideDrawer: RadSideDrawer = <RadSideDrawer>app.getRootView();

        if (tappedItem) {
            this._router.navigateByUrl(tappedItem.url);
        } else {
            this._router.navigate([
                '/examples-depth-2',
                'this._currentExample.title',
                'tappedItem.title'
            ]);
        };

        sideDrawer.toggleDrawerState();
    }
}
