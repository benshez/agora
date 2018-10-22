import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
    selector: '[agoraDynamicComponent]'
})
export class DynamicComponentDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
