import {
    Directive,
    OnChanges,
    Input,
    ViewContainerRef,
    OnDestroy
} from '@angular/core';

import { DynamicLoaderService } from '@components/dynamic/services/loader/service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[componentFactory]'
})
export class ControlFactoryDirective implements OnChanges, OnDestroy {
    @Input()
    model: any;
    componentRef;
    init = false;

    constructor(
        private vcRef: ViewContainerRef,
        private loader: DynamicLoaderService
    ) { }

    create(comp) {
        this.loader.createComponentFactory(comp).then(factory => {
            const compRef = this.vcRef.createComponent(factory);

            (<any>compRef).instance.model = this.model;

            if (this.componentRef) {
                this.componentRef.destroy();
            }

            this.componentRef = compRef;
            this.init = true;
        });
    }
    ngOnChanges() {
        if (!this.model || this.init) {
            return;
        }

        this.create(this.model.type);
    }

    public ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}
