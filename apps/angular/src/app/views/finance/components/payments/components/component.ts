import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '@common/modules/app/interfaces/IAppState';

@Component({
    moduleId: module.id,
    selector: 'agora-change-payements',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class ChangePaymentsComponent implements OnInit {

    constructor(public store: Store<IAppState>) {
        debugger
    }

    ngOnInit() {
    }

}
