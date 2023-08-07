import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputData } from '../types';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent {
  @Input({ required: true }) items!: InputData;
  @Input({ required: true }) section!: number;
  @Input() nonDeletable = false;

  @Output() readonly deletSelf = new EventEmitter<void>();
  @Output() readonly dataChange = new EventEmitter<void>();

  onChange(index: number, value: number): void {
    this.items[index].value = value;
    this.dataChange.emit();
  }

  add(): void {
    this.items.push({ value: 0 });
    this.dataChange.emit();
  }

  delete(index: number): void {
    this.items.splice(index, 1);
    this.dataChange.emit();
  }

  getResult(): string {
    return this.items
      .reduce((carry, item) => carry + item.value, 0)
      .toLocaleString();
  }

  doDelteSelf(): void {
    this.deletSelf.emit();
  }
}
