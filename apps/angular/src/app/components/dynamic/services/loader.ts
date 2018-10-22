import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector,
    ViewContainerRef
} from '@angular/core'
import { DynamicComponent } from '@components/dynamic/components/component'

@Injectable()
export class DynamicComponentLoader {

    private factoryResolver: ComponentFactoryResolver;
    private rootViewContainer: ViewContainerRef;

    constructor(factoryResolver: ComponentFactoryResolver) {
        this.factoryResolver = factoryResolver
    }

    setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
        this.rootViewContainer = viewContainerRef
    }

    addDynamicComponent() {
        const factory = this.factoryResolver
            .resolveComponentFactory(DynamicComponent);

        const component = factory
            .create(this.rootViewContainer.parentInjector);

        this.rootViewContainer.insert(component.hostView);
    }
}
