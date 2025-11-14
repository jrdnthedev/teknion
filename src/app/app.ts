import { Component, signal } from '@angular/core';
import { OrderLine } from './domains/purchase_order/models/order_line';
import { PurchaseOrder } from './domains/purchase_order/models/purchase_order';
import { Table } from './shared/components/table/table';
import { PoDetail } from './domains/purchase_order/components/po-detail/po-detail';
import { ShipmentsList } from './domains/purchase_order/components/shipments-list/shipments-list';

@Component({
  selector: 'app-root',
  imports: [Table, PoDetail,ShipmentsList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('teknion');
  purchaseOrder: PurchaseOrder = {
    poId: 'PO-20231101-001',
    status: 'Partially Shipped',
    poDate: '2023-11-01',
    totalValue: 12500.75,
    poTags: [
      { key: 'Priority', value: 'High' },
      { key: 'Region', value: 'North America' },
    ],
    poAlerts: [
      { alertId: 'ALRT-001', severity: 'Medium' },
      { alertId: 'ALRT-002', severity: 'Low' },
    ],
    orderLines: [
      {
        lineId: 'LINE-001',
        itemSku: 'SKU-1001',
        description: 'Industrial Drill',
        quantity: 5,
        price: 1500.0,
      },
      {
        lineId: 'LINE-002',
        itemSku: 'SKU-1002',
        description: 'Safety Goggles',
        quantity: 20,
        price: 25.0,
      },
    ],
    shipments: [
      {
        shipmentId: 'SHIP-001',
        status: 'Booked',
        shipmentAlerts: [],
        loadPlan: 'LP-001',
        lineIds: ['LINE-001'],
        shipmentInstances: [
          {
            instanceId: 'INST-001-A',
            status: 'In Transit',
            instanceAlerts: [],
            lineIds: ['LINE-001'],
            trakcingDetail: {
              carrier: 'FedEx',
              trackingNumber: 'FDX123456789',
              lastUpdate: '2023-11-03T14:30:00Z',
            },
          },
        ],
      },
      {
        shipmentId: 'SHIP-002',
        status: 'In Progress',
        shipmentAlerts: [{ alertId: 'SHIP-ALRT-002', severity: 'High' }],
        loadPlan: 'LP-002',
        lineIds: ['LINE-002'],
        shipmentInstances: [
          {
            instanceId: 'INST-002-A',
            status: 'Delayed',
            instanceAlerts: [{ alertId: 'INST-ALRT-002', severity: 'High' }],
            lineIds: ['LINE-002'],
            trakcingDetail: {
              carrier: 'UPS',
              trackingNumber: 'UPS987654321',
              lastUpdate: '2023-11-04T10:00:00Z',
            },
          },
        ],
      },
      {
        shipmentId: 'SHIP-003',
        status: 'Complete',
        shipmentAlerts: [],
        loadPlan: 'LP-003',
        lineIds: ['LINE-003'],
        shipmentInstances: [
          {
            instanceId: 'INST-003-A',
            status: 'Delivered',
            instanceAlerts: [],
            lineIds: ['LINE-003'],
            trakcingDetail: {
              carrier: 'DHL',
              trackingNumber: 'DHL555666777',
              lastUpdate: '2023-11-02T08:45:00Z',
            },
          },
        ],
      },
    ],
  };
  filteredOrderLines: OrderLine[] = this.purchaseOrder.orderLines;

  filterOrderLines(value: string) {
    if (value === 'All') {
      this.filteredOrderLines = this.purchaseOrder.orderLines;
    } else {
      this.filteredOrderLines = this.purchaseOrder.orderLines.filter(
        (item: OrderLine) => item.lineId === value
      );
    }
  }
}
