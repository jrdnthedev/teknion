import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PurchaseOrder } from '../../models/purchase_order';
import { PoService } from '../../services/po-service/po-service';
import { AsyncPipe } from '@angular/common';
import { OrderLineModel } from '../../models/order_line';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Table } from '../../../../shared/components/table/table';

@Component({
  selector: 'app-po-list',
  imports: [RouterLink, RouterOutlet, AsyncPipe, Table],
  templateUrl: './po-list.html',
  styleUrl: './po-list.css',
})
export class PoList {
  purchaseOrderService = inject(PoService);
  purchaseOrder$ = this.purchaseOrderService.orders$;

  private filterSubject = new BehaviorSubject<string>('All');

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
