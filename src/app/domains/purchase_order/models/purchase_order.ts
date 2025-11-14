import { OrderAlert } from './order_alert';
import { OrderLineModel } from './order_line';
import { OrderTag } from './order_tag';
import { ShipmentModel } from './shipment.model';

export interface PurchaseOrder {
  poId: string;
  status: 'Active' | 'Cancelled' | 'Partially Shipped';
  poDate: string;
  totalValue: number;
  poTags: OrderTag[];
  poAlerts: OrderAlert[];
  orderLines: OrderLineModel[];
  shipments: ShipmentModel[];
}
