import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { PurchaseOrder } from '../../models/purchase_order';
import { AsyncPipe, DatePipe } from '@angular/common';
import { PoService } from '../../services/po-service/po-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ShipmentsList } from '../shipments-list/shipments-list';
import { OrderLine } from '../order-line/order-line';

@Component({
  selector: 'app-po-detail',
  imports: [Card, DatePipe, AsyncPipe, ShipmentsList, OrderLine],
  templateUrl: './po-detail.html',
  styleUrl: './po-detail.css',
})
export class PoDetail implements OnInit {
  purchaseOrderService = inject(PoService);
  order$!: Observable<PurchaseOrder | undefined>;
  private poId = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.poId = this.route.snapshot.paramMap.get('poId') || '';
    this.loadPurchaseOrder();
  }

  private loadPurchaseOrder() {
    if (this.poId) {
      this.order$ = this.purchaseOrderService.getOrderById$(this.poId);
    }
  }
}
