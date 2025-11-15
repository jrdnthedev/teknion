import { OrderAlertModel } from './order_alert.model';
import { ShipmentInstanceModel } from './shipment_instance.model';

export interface ShipmentModel {
  shipmentId: string;
  status: 'Booked' | 'In Progress' | 'Complete';
  shipmentAlerts: OrderAlertModel[];
  loadPlan: string;
  shipmentInstances: ShipmentInstanceModel[];
  lineIds: string[];
}
