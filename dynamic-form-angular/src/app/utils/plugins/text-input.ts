import { ViewContainerRef } from '@angular/core';
import { InputTextComponent } from 'src/app/components/fields/input-text/input-text.component';
import { FieldOptions } from 'src/app/models';

export function createTextField(
  viewContainerRef: ViewContainerRef,
  options: FieldOptions
): void {
  const componentRef = viewContainerRef.createComponent(InputTextComponent)
    .instance as Pick<InputTextComponent, keyof FieldOptions>;

  Object.keys(options).forEach((key) => {
    let property = key as keyof FieldOptions;

    componentRef[property] = options[property];
  });
}
