export interface Field extends Validator, IgnoredProperties {
  fieldType: string;
  fieldTypeLabel: string;
  fieldVariables: string[];
  hint?: string;
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
