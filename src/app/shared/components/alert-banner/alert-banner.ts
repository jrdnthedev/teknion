import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { OrderAlertModel } from '../../../domains/purchase_order/models/order_alert.model';

@Component({
  selector: 'app-alert-banner',
  imports: [NgClass],
  templateUrl: './alert-banner.html',
  styleUrl: './alert-banner.css',
})
export class AlertBanner {
  @Input() alert!: OrderAlertModel;
}
