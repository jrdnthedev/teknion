import { Component, Input } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { PurchaseOrder } from '../../models/purchase_order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-po-detail',
  imports: [Card, DatePipe],
  templateUrl: './po-detail.html',
  styleUrl: './po-detail.css',
})
export class PoDetail {
  @Input() order!: PurchaseOrder;
}
