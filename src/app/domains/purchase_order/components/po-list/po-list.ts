import { Component, inject, signal, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PurchaseOrder } from '../../models/purchase_order';
import { PoService } from '../../services/po-service/po-service';
import { AsyncPipe } from '@angular/common';
import { OrderLineModel } from '../../models/order_line';
import { Observable, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Nav } from '../../../../layout/components/nav/nav';

@Component({
  selector: 'app-po-list',
  imports: [RouterOutlet, AsyncPipe, Nav],
  templateUrl: './po-list.html',
  styleUrl: './po-list.css',
})
export class PoList implements OnInit, OnDestroy {
  purchaseOrderService = inject(PoService);
  purchaseOrder$ = this.purchaseOrderService.orders$;
  showWelcome = signal(true);
  private filterSubject = new BehaviorSubject<string>('All');
  private destroy$ = new Subject<void>();
  constructor(private router: Router) {}

  ngOnInit() {
    this.checkRouteState();

    // Listen for route changes
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.checkRouteState()),
        takeUntil(this.destroy$)
      )
      .subscribe();
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

  private checkRouteState() {
    const currentUrl = this.router.url;
    this.showWelcome.set(currentUrl.endsWith('/purchase-order'));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
