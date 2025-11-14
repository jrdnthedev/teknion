import { Component, Input } from '@angular/core';
import { OrderLineModel } from '../../models/order_line';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-line',
  imports: [CurrencyPipe],
  templateUrl: './order-line.html',
  styleUrl: './order-line.css',
})
export class OrderLine {
  @Input() orderLine!: OrderLineModel;
}
