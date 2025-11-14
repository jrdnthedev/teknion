import { OrderAlert } from './order_alert';
import { ShipmentInstance } from './shipment_instance';

export interface Shipment {
  shipmentId: string;
  status: 'Booked' | 'In Progress' | 'Complete';
  shipmentAlerts: OrderAlert[];
  loadPlan: string;
  shipmentInstances: ShipmentInstance[];
  lineIds: string[];
}
