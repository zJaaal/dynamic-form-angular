import { Component, OnInit } from '@angular/core';
import { Row } from 'src/app/models';
import { FieldsService } from 'src/app/services/fields-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  providers: [FieldsService],
})
export class FormComponent implements OnInit {
  fields: Row[] = [];
  constructor(private fieldsService: FieldsService) {}

  ngOnInit(): void {
    this.fieldsService.getFields().subscribe((fields) => {
      this.fields = fields as Row[];

      console.log(this.fields);
    });
  }
}
