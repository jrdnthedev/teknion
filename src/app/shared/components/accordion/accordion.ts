import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  @Input() name = 'Test Accordion';
  @Input() id = '';
  @Input() controlId = '';
  isExpanded = signal<boolean>(false);

  toggle() {
    this.isExpanded.update((value: boolean) => !value);
  }
}
