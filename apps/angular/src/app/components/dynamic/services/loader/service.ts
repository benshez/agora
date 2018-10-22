import {
    Component,
    ComponentFactory,
    NgModule,
    Injectable,
    ModuleWithComponentFactories,
    Compiler
} from '@angular/core';
import { CommonModule } from '@angular/common';

//import { Observable } from 'rxjs/Rx';

import { LoginComponent } from '@views/login/components/login/component';
import { RegisterComponent } from '@views/login/components/register/component';

const typeMap = {
    login: LoginComponent,
    register: RegisterComponent
};

function createComponentModule(component: any) {
    @NgModule({
        imports: [CommonModule],
        declarations: [component]
    })
    class RuntimeComponentModule { }

    return RuntimeComponentModule;
}

@Injectable()
export class DynamicLoaderService {
    //private resolveCompHelper$ = new Observable<any>();
    //private cache = new Map<string, ComponentFactory<any> | number>();

    constructor(protected compiler: Compiler) { }
    public createComponentFactory(type: string): Promise<ComponentFactory<any>> {
        return new Promise(resolve => { });
    }
    // public createComponentFactory(
    //     type: string
    // ): Promise<ComponentFactory<any>> {
    //     let factory = this.cache.get(type);

    //     if (factory === 1) {
    //         return new Promise(resolve => {

    //             // const subscriber = this.resolveCompHelper$.subscribe(data => {
    //             //     if (type !== data.type) {
    //             //         return;
    //             //     }
    //             //     subscriber.unsubscribe();
    //             //     resolve(data.factory);
    //             // });
    //         });
    //     }

    //     if (factory) {
    //         return new Promise(resolve =>
    //             resolve(factory as
    //                 | ComponentFactory<any>
    //                 | PromiseLike<ComponentFactory<any>>)
    //         );
    //     }

    //     const comp = typeMap[type];
    //     this.cache.set(type, 1);
    //     return new Promise(resolve => {
    //         this.compiler
    //             .compileModuleAndAllComponentsAsync(createComponentModule(comp))
    //             .then(
    //                 (
    //                     moduleWithFactories: ModuleWithComponentFactories<any>
    //                 ) => {
    //                     factory = moduleWithFactories.componentFactories.find(
    //                         x => x.componentType === comp
    //                     );
    //                     this.cache.set(type, factory);
    //                     //this.resolveCompHelper$.next({ type, factory });

    //                     resolve(factory);
    //                 }
    //             );
    //     });
    // }
}
