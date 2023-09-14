import { Component } from '@angular/core';

export interface Field extends Validator, IgnoredProperties {
  fieldType: string;
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
  [key: string]: any;
}

export type FieldConstructor = () => Component;

export enum Fields {
  TEXT = 'Text',
  HOST = 'Host-Folder',
}
