import { NgClass } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() inputValue: any = '';
  @Input() placeholder: string = '';
  @Output()
  inputValueChange = new EventEmitter<string>();
  @Input() label: string = '';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  emitValueChange() {
    console.log('this value is change');
    this.inputValueChange.emit(this.inputValue);
  }
}
