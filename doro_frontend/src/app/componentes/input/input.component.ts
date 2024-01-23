import { Component, Input, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() inputValue: any = '';
  @Output() inputValueChange = new EventEmitter<string>();

  emitValueChange() {
    console.log('this value is change');
    this.inputValueChange.emit(this.inputValue);
  }
}
