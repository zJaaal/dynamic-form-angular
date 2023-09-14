import { AfterContentInit, Component, Input, ViewChild } from '@angular/core';
import { FieldHostDirective } from 'src/app/directives/field-host.directive';
import { Fields } from 'src/app/models';
import { fieldMap } from 'src/app/utils/fieldTypeMap';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements AfterContentInit {
  @Input() controlName = '';
  @Input() hint?: string;
  @Input() fieldType!: Fields;
  @Input() fieldVariables = [];

  @ViewChild(FieldHostDirective, { static: true })
  fieldHost?: FieldHostDirective;

  ngAfterContentInit() {
    fieldMap[this.fieldType](
      (this.fieldHost as FieldHostDirective).viewContainerRef,
      {
        id: this.controlName,
        controlName: this.controlName,
        value: '',
      }
    );
  }
}
