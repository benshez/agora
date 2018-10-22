import { Component, OnInit } from '@angular/core';
import * as app from 'tns-core-modules/application';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
    moduleId: module.id,
    selector: 'agora-home',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {}

    public toggle() {
        const sideDrawer: RadSideDrawer = <RadSideDrawer>app.getRootView();

        sideDrawer.toggleDrawerState();
    }
}
