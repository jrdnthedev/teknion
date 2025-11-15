import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { PurchaseOrder } from '../../models/purchase_order';
import { AsyncPipe, DatePipe } from '@angular/common';
import { PoService } from '../../services/po-service/po-service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, switchMap } from 'rxjs';
import { ShipmentsList } from '../shipments-list/shipments-list';
import { OrderLine } from '../order-line/order-line';
import { OrderLineModel } from '../../models/order_line';
import { Table } from '../../../../shared/components/table/table';
import { AlertBanner } from '../../../../shared/components/alert-banner/alert-banner';

@Component({
  selector: 'app-po-detail',
  imports: [Card, DatePipe, AsyncPipe, ShipmentsList, OrderLine, Table, AlertBanner],
  templateUrl: './po-detail.html',
  styleUrl: './po-detail.css',
})
export class PoDetail implements OnInit {
  purchaseOrderService = inject(PoService);
  order$!: Observable<PurchaseOrder | undefined>;
  purchaseOrder$ = this.purchaseOrderService.orders$;
  private filterSubject = new BehaviorSubject<string>('All');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Make the component reactive to route parameter changes
    this.order$ = this.route.paramMap.pipe(
      map(params => params.get('poId') || ''),
      switchMap(poId => this.purchaseOrderService.getOrderById$(poId))
    );
  }

  orderIds$: Observable<string[]> = this.purchaseOrder$.pipe(
    map((orders) => {
      if (!orders || orders.length === 0) return ['All'];

      const uniqueOrderIds = new Set<string>();
      orders.forEach((order: PurchaseOrder) => {
        order.orderLines?.forEach((line: OrderLineModel) => {
          if (line.lineId) {
            uniqueOrderIds.add(line.lineId);
          }
        });
      });

      return ['All', ...Array.from(uniqueOrderIds)];
    })
  );

  filteredOrderLines$: Observable<OrderLineModel[]> = combineLatest([
    this.purchaseOrder$,
    this.filterSubject,
  ]).pipe(
    map(([orders, filterValue]) => {
      if (!orders || orders.length === 0) return [];

      // Assuming we want to get all order lines from all purchase orders
      const allOrderLines = orders.flatMap((order: PurchaseOrder) => order.orderLines || []);

      if (filterValue === 'All') {
        return allOrderLines;
      } else {
        return allOrderLines.filter((item: OrderLineModel) => item.lineId === filterValue);
      }
    })
  );

  filterOrderLines(value: string) {
    this.filterSubject.next(value);
  }
}
