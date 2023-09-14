import { ViewContainerRef } from '@angular/core';

export interface Field extends Validator, IgnoredProperties {
  fieldType: Fields;
  fieldTypeLabel: string;
  fieldVariables: string[];
  hint?: string;
  name: string;
}

export interface Validator {
  required?: boolean;
  regexCheck?: string;
}

export interface Row extends IgnoredProperties {
  columns: Column[];
  divider: any[];
}

export interface Column extends IgnoredProperties {
  fields: Field[];
  columnDivider: any[];
}

interface IgnoredProperties {
  [key: string]: unknown;
}

export type FieldConstructor = (
  viewContainerRef: ViewContainerRef,
  options: FieldOptions
) => void;

export enum Fields {
  TEXT = 'Text',
  HOST = 'Host-Folder',
}

export interface FieldOptions {
  id: string;
  controlName: string;
  value: string;
}
