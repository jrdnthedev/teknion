import { PurchaseOrderModel } from '../models/purchase_order.model';

export interface POState {
  orders: PurchaseOrderModel[];
}

export const initialPOState: POState = {
  orders: [
    {
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
    },
    {
      poId: 'PO-20231115-002',
      status: 'Active',
      poDate: '2023-11-15',
      totalValue: 8420.0,
      poTags: [
        { key: 'Priority', value: 'Medium' },
        { key: 'Region', value: 'Europe' },
      ],
      poAlerts: [{ alertId: 'ALRT-003', severity: 'Low' }],
      orderLines: [
        {
          lineId: 'LINE-003',
          itemSku: 'SKU-2001',
          description: 'Thermal Sensor',
          quantity: 10,
          price: 500.0,
        },
        {
          lineId: 'LINE-004',
          itemSku: 'SKU-2002',
          description: 'Control Panel',
          quantity: 2,
          price: 1610.0,
        },
      ],
      shipments: [
        {
          shipmentId: 'SHIP-004',
          status: 'Booked',
          shipmentAlerts: [{ alertId: 'SHIP-ALRT-004', severity: 'Medium' }],
          loadPlan: 'LP-004',
          lineIds: ['LINE-003', 'LINE-004'],
          shipmentInstances: [
            {
              instanceId: 'INST-004-A',
              status: 'In Transit',
              instanceAlerts: [{ alertId: 'INST-ALRT-004-A', severity: 'Low' }],
              lineIds: ['LINE-003'],
              trakcingDetail: {
                carrier: 'DHL',
                trackingNumber: 'DHL123456789',
                lastUpdate: '2023-11-16T09:00:00Z',
              },
            },
            {
              instanceId: 'INST-004-B',
              status: 'Delayed',
              instanceAlerts: [{ alertId: 'INST-ALRT-004-B', severity: 'Medium' }],
              lineIds: ['LINE-004'],
              trakcingDetail: {
                carrier: 'DHL',
                trackingNumber: 'DHL987654321',
                lastUpdate: '2023-11-17T12:30:00Z',
              },
            },
          ],
        },
        {
          shipmentId: 'SHIP-005',
          status: 'Booked',
          shipmentAlerts: [{ alertId: 'SHIP-ALRT-005', severity: 'Low' }],
          loadPlan: 'LP-005',
          lineIds: ['LINE-003'],
          shipmentInstances: [
            {
              instanceId: 'INST-005-A',
              status: 'Delivered',
              instanceAlerts: [],
              lineIds: ['LINE-003'],
              trakcingDetail: {
                carrier: 'FedEx',
                trackingNumber: 'FDX1122334455',
                lastUpdate: '2023-11-18T08:15:00Z',
              },
            },
            {
              instanceId: 'INST-005-B',
              status: 'In Transit',
              instanceAlerts: [{ alertId: 'INST-ALRT-005-B', severity: 'Low' }],
              lineIds: ['LINE-003'],
              trakcingDetail: {
                carrier: 'FedEx',
                trackingNumber: 'FDX9988776655',
                lastUpdate: '2023-11-19T14:45:00Z',
              },
            },
          ],
        },
      ],
    },
    {
      poId: 'PO-20231120-003',
      status: 'Active',
      poDate: '2023-11-20',
      totalValue: 3100.5,
      poTags: [
        { key: 'Priority', value: 'Low' },
        { key: 'Region', value: 'Asia Pacific' },
      ],
      poAlerts: [{ alertId: 'ALRT-004', severity: 'Medium' }],
      orderLines: [
        {
          lineId: 'LINE-005',
          itemSku: 'SKU-3001',
          description: 'LED Display',
          quantity: 15,
          price: 100.0,
        },
        {
          lineId: 'LINE-006',
          itemSku: 'SKU-3002',
          description: 'Mounting Bracket',
          quantity: 30,
          price: 35.0,
        },
      ],
      shipments: [
        {
          shipmentId: 'SHIP-005',
          status: 'Complete',
          shipmentAlerts: [],
          loadPlan: 'LP-005',
          lineIds: ['LINE-005', 'LINE-006'],
          shipmentInstances: [
            {
              instanceId: 'INST-005-A',
              status: 'Delivered',
              instanceAlerts: [],
              lineIds: ['LINE-005', 'LINE-006'],
              trakcingDetail: {
                carrier: 'BlueDart',
                trackingNumber: 'BD123456789',
                lastUpdate: '2023-11-21T09:00:00Z',
              },
            },
          ],
        },
      ],
    },
  ],
};
