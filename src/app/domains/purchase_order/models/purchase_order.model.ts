import { OrderAlertModel } from './order_alert.model';
import { OrderLineModel } from './order_line.model';
import { OrderTagModel } from './order_tag.model';
import { ShipmentModel } from './shipment.model';

export interface PurchaseOrderModel {
  poId: string;
  status: 'Active' | 'Cancelled' | 'Partially Shipped';
  poDate: string;
  totalValue: number;
  poTags: OrderTagModel[];
  poAlerts: OrderAlertModel[];
  orderLines: OrderLineModel[];
  shipments: ShipmentModel[];
}
