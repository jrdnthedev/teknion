import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { OrderAlert } from '../../../domains/purchase_order/models/order_alert';

@Component({
  selector: 'app-alert-banner',
  imports: [NgClass],
  templateUrl: './alert-banner.html',
  styleUrl: './alert-banner.css',
})
export class AlertBanner {
  @Input() alert!: OrderAlert;
}
