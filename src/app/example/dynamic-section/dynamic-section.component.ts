import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';
import { InputData, SectionData } from '../types';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, DynamicInputComponent],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
})
export class DynamicSectionComponent {
  @Input({ required: true }) items!: SectionData;

  @Output() dataChange = new EventEmitter<SectionData>();

  add(): void {
    this.items?.push([{ value: 0 }]);
    this.dataChange.emit(this.items);
  }

  delete(index: number): void {
    this.items?.splice(index, 1);
    this.dataChange.emit(this.items);
  }

  onDataChange(): void {
    this.dataChange.emit(this.items);
  }
}
