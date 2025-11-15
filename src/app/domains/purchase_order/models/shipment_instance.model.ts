import { OrderAlertModel } from './order_alert.model';

export interface ShipmentInstanceModel {
  instanceId: string;
  status: 'In Transit' | 'Delivered' | 'Delayed';
  instanceAlerts: OrderAlertModel[];
  lineIds: string[];
  trakcingDetail: {
    carrier: string;
    trackingNumber: string;
    lastUpdate: string;
  };
}
