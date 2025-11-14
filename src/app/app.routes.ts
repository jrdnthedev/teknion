import { Routes } from '@angular/router';
import { PoDetail } from './domains/purchase_order/components/po-detail/po-detail';
import { PoList } from './domains/purchase_order/components/po-list/po-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'purchase-order',
    pathMatch: 'full',
  },
  {
    path: 'purchase-order',
    component: PoList,
    children: [
      {
        path: 'purchase-order-detail/:poId',
        component: PoDetail,
      }
    ],
  },
];
