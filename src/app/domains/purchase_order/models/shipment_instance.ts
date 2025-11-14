import { OrderAlert } from './order_alert';

export interface ShipmentInstance {
  instanceId: string;
  status: 'In Transit' | 'Delivered' | 'Delayed';
  instanceAlerts: OrderAlert[];
  lineIds: string[];
  trakcingDetail: {
    carrier: string;
    trackingNumber: string;
    lastUpdate: string;
  };
}
