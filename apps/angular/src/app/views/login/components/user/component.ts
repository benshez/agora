import {
    Component,
    Input,
    ViewChild,
    OnInit,
    OnDestroy,
    ComponentFactoryResolver,
    Type
} from '@angular/core';

import { UserDirective } from '@views/login/components/user/directive';
import { UserItem } from '@views/login/components/user/userItem';
import { IUserComponent } from '@views/login/interfaces/IUserComponent';
import { LoginComponent } from '@views/login/components/login/component';
import { RegisterComponent } from '@views/login/components/register/component';

@Component({
    moduleId: module.id,
    selector: 'agora-user',
    template: `
    <ng-template agoraUserHost></ng-template>
    <button *ngIf="doingLogin" mat-button (click)="onRegister()">Register</button>
    <button *ngIf="doingRegistration" mat-button (click)="onLogin()">Login</button>
`,
    styleUrls: ['./component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
    @ViewChild(UserDirective)
    agoraUserHost: UserDirective;
    @Input()
    model: UserItem;

    public doingLogin = true;
    public doingRegistration = false;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.setButtonDisplay(true);
        this.loadComponent(LoginComponent);
    }

    ngOnDestroy() { }

    loadComponent(component: Type<any>) {
        const item = new UserItem(component, '');

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            item.component
        );

        const viewContainerRef = this.agoraUserHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<IUserComponent>componentRef.instance).data = item.model;
    }

    onRegister() {
        this.setButtonDisplay(false);
        this.loadComponent(RegisterComponent);
    }

    onLogin() {
        this.setButtonDisplay(true);
        this.loadComponent(LoginComponent);
    }

    setButtonDisplay(isLogin: boolean) {
        this.doingLogin = isLogin;
        this.doingRegistration = !isLogin;
    }
}
