import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  @Input() name = 'Test Accordion';
  @Input() id = '';
  @Input() controlId = '';
  @Input() isWarning = false;
  isExpanded = signal<boolean>(false);

  toggle() {
    this.isExpanded.update((value: boolean) => !value);
  }
}
