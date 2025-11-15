import { Injectable } from '@angular/core';
import { initialPOState, POState } from '../../store/purchase_order.state';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PurchaseOrderModel } from '../../models/purchase_order.model';

@Injectable({
  providedIn: 'root',
})
export class PoService {
  private readonly _state$ = new BehaviorSubject<POState>(initialPOState);

  // Get all purchase orders
  get orders$(): Observable<PurchaseOrderModel[]> {
    return this._state$.pipe(map(state => state.orders));
  }

  // Get a specific purchase order by ID
  getOrderById$(poId: string): Observable<PurchaseOrderModel | undefined> {
    return this.orders$.pipe(
      map(orders => orders.find(order => order.poId === poId))
    );
  }
}
