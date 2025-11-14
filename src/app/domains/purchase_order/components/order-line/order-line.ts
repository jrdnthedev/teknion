import { Component, Input } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { OrderLineModel } from '../../models/order_line';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-line',
  imports: [Card, CurrencyPipe],
  templateUrl: './order-line.html',
  styleUrl: './order-line.css',
})
export class OrderLine {
  @Input() orderLine!: OrderLineModel;
}
