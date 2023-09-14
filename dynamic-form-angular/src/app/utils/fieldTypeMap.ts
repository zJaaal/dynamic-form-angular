import { ViewContainerRef } from '@angular/core';
import { FieldConstructor, FieldOptions, Fields } from '../models';
import { createTextField } from './plugins/text-input';

export const fieldMap: Record<Fields, FieldConstructor> = {
  [Fields.TEXT]: (vcr: ViewContainerRef, opt: FieldOptions) =>
    createTextField(vcr, opt),
  [Fields.HOST]: (vcr: ViewContainerRef, opt: FieldOptions) =>
    createTextField(vcr, opt),
};
