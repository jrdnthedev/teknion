import { Component, Input, signal } from '@angular/core';
import { PurchaseOrderModel } from '../../../domains/purchase_order/models/purchase_order.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  @Input() navItems!: PurchaseOrderModel[];

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
