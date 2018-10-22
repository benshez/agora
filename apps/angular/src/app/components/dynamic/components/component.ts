import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { DynamicComponentDirective } from '@components/dynamic/directives/loader';

@Component({
    selector: 'agora-app-dynamic',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class DynamicComponent {
    @ViewChild(DynamicComponentDirective) injectComp: DynamicComponentDirective;

    component = {
        children: [
            {
                data: 'model1',
                type: 'login'
            },
            {
                data: 'model2',
                type: 'register'
            }
        ]
    };

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    public onComponentAdd() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponentDirective);
        const viewContainerRef = this.injectComp.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
    }
    public onComponentRemove() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponentDirective);
        const viewContainerRef = this.injectComp.viewContainerRef;
        const componentRef = viewContainerRef.remove();
    }
}
