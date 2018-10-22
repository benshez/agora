import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[agoraUserHost]',
})
export class UserDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
