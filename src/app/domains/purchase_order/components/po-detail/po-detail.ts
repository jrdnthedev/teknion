import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { PurchaseOrderModel } from '../../models/purchase_order.model';
import { AsyncPipe, DatePipe } from '@angular/common';
import { PoService } from '../../services/po-service/po-service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ShipmentsList } from '../shipments-list/shipments-list';
import { OrderLine } from '../order-line/order-line';
import { OrderLineModel } from '../../models/order_line.model';
import { Table } from '../../../../shared/components/table/table';
import { AlertBanner } from '../../../../shared/components/alert-banner/alert-banner';
import { ShipmentModel } from '../../models/shipment.model';
import { ShipmentInstanceModel } from '../../models/shipment_instance.model';

interface FilterOption {
  value: string;
  label: string;
  type: 'all' | 'shipment' | 'instance';
}

@Component({
  selector: 'app-po-detail',
  imports: [Card, DatePipe, AsyncPipe, ShipmentsList, OrderLine, Table, AlertBanner],
  templateUrl: './po-detail.html',
  styleUrl: './po-detail.css',
})
export class PoDetail implements OnInit {
  private poService = inject(PoService);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  
  private filterSubject = new BehaviorSubject<string>('all');
  
  order$!: Observable<PurchaseOrderModel | undefined>;
  filterOptions$!: Observable<FilterOption[]>;
  filteredOrderLines$!: Observable<OrderLineModel[]>;
  currentFilter$!: Observable<string>;

  ngOnInit() {
    // Reset filter to 'all' when navigating to a new order
    this.route.paramMap.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.filterSubject.next('all');
    });

    this.order$ = this.route.paramMap.pipe(
      map(params => params.get('poId') || ''),
      switchMap(poId => this.poService.getOrderById$(poId)),
      takeUntilDestroyed(this.destroyRef)
    );

    this.filterOptions$ = this.order$.pipe(
      map((order: PurchaseOrderModel | undefined) => this.generateFilterOptions(order))
    );

    this.currentFilter$ = this.filterSubject.asObservable();

    this.filteredOrderLines$ = combineLatest([
      this.order$,
      this.filterSubject
    ]).pipe(
      map(([order, filterValue]) => this.filterOrderLinesByValue(order, filterValue))
    );
  }

  filterOrderLines(value: string) {
    this.filterSubject.next(value);
  }

  private generateFilterOptions(order: PurchaseOrderModel | undefined): FilterOption[] {
    if (!order) return [{ value: 'all', label: 'All Lines', type: 'all' }];

    const options: FilterOption[] = [{ value: 'all', label: 'All Lines', type: 'all' }];

    order.shipments?.forEach((shipment: ShipmentModel) => {
      options.push({
        value: shipment.shipmentId,
        label: `Shipment: ${shipment.shipmentId}`,
        type: 'shipment'
      });

      shipment.shipmentInstances?.forEach((instance: ShipmentInstanceModel) => {
        options.push({
          value: instance.instanceId,
          label: `Instance: ${instance.instanceId}`,
          type: 'instance'
        });
      });
    });

    return options;
  }

  private filterOrderLinesByValue(order: PurchaseOrderModel | undefined, filterValue: string): OrderLineModel[] {
    if (!order?.orderLines) return [];
    if (filterValue === 'all') return order.orderLines;

    // Check shipments first
    const shipment = order.shipments?.find((shipment: ShipmentModel) => shipment.shipmentId === filterValue);
    if (shipment) {
      return order.orderLines.filter((line: OrderLineModel) => shipment.lineIds.includes(line.lineId));
    }

    // Check shipment instances
    for (const ship of order.shipments || []) {
      const instance = ship.shipmentInstances?.find((instance: ShipmentInstanceModel) => instance.instanceId === filterValue);
      if (instance) {
        return order.orderLines.filter((line: OrderLineModel) => instance.lineIds.includes(line.lineId));
      }
    }

    return [];
  }
}
