import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '/purchase-order',
    renderMode: RenderMode.Prerender
  },
  {
    path: '/purchase-order/purchase-order-detail/**',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
