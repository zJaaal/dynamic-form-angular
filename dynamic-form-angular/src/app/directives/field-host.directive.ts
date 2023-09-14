import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[fieldHost]',
})
export class FieldHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
