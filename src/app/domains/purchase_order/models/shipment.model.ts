import { OrderAlert } from './order_alert';
import { ShipmentInstanceModel } from './shipment_instance.model';

export interface ShipmentModel {
  shipmentId: string;
  status: 'Booked' | 'In Progress' | 'Complete';
  shipmentAlerts: OrderAlert[];
  loadPlan: string;
  shipmentInstances: ShipmentInstanceModel[];
  lineIds: string[];
}
