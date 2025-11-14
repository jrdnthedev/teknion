import { Routes } from '@angular/router';
import { PoDetail } from './domains/purchase_order/components/po-detail/po-detail';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'purchase',
        pathMatch: 'full'
    },
    {
        path: 'purchase',
        component: PoDetail,
        title: 'Purchase Order Detail'
    }
];
