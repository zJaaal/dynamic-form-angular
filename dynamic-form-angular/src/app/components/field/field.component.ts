import {
  AfterViewInit,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FieldHostDirective } from 'src/app/directives/field-host.directive';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements AfterViewInit {
  @Input() label = '';
  @Input() hint?: string;
  @Input() fieldType = '';
  @Input() fieldVariables = [];

  @ViewChild(FieldHostDirective, { static: true })
  fieldHost?: FieldHostDirective;

  ngAfterViewInit() {
    console.log(this.fieldHost?.viewContainerRef);
  }
}
