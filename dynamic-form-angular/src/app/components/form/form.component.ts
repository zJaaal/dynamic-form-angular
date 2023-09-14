import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Row } from 'src/app/models';
import { FieldsService } from 'src/app/services/fields-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FieldsService],
})
export class FormComponent implements OnInit {
  fields: Row[] = [];
  public myForm: FormGroup = this.fb.group({});

  constructor(private fieldsService: FieldsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fieldsService.getFields().subscribe((fields) => {
      this.fields = fields as Row[];

      this.fields.forEach((row) => {
        row.columns.forEach((column) => {
          column.fields.forEach((field) => {
            this.myForm.addControl(field.name, this.fb.control(''));
          });
        });
      });
    });

    console.log(this.myForm);

    this.myForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
