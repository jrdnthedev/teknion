import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'purchase-order',
    renderMode: RenderMode.Server
  },
  {
    path: 'purchase-order/purchase-order-detail/**',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
