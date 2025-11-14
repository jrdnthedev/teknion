import { OrderAlert } from './order_alert';
import { OrderLine } from './order_line';
import { OrderTag } from './order_tag';
import { Shipment } from './shipment';

export interface PurchaseOrder {
  poId: string;
  status: 'Active' | 'Cancelled' | 'Partially Shipped';
  poDate: string;
  totalValue: number;
  poTags: OrderTag[];
  poAlerts: OrderAlert[];
  orderLines: OrderLine[];
  shipments: Shipment;
}
