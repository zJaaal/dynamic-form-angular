import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() controlName: string = '';
  @Input() id: string = '';
  @Input() value: string = '';

  constructor() {}
}
