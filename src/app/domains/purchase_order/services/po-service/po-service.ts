import { Injectable } from '@angular/core';
import { initialPOState, POState } from '../../store/purchase_order.state';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PurchaseOrder } from '../../models/purchase_order';

@Injectable({
  providedIn: 'root',
})
export class PoService {
  private readonly _state$ = new BehaviorSubject<POState>(initialPOState);

  // Get the complete state
  get state$(): Observable<POState> {
    return this._state$.asObservable();
  }

  // Get current state value
  get currentState(): POState {
    return this._state$.value;
  }

  // Get all purchase orders
  get orders$(): Observable<PurchaseOrder[]> {
    return this._state$.pipe(map(state => state.orders));
  }

  // Get current orders value
  get currentOrders(): PurchaseOrder[] {
    return this._state$.value.orders;
  }

  // Get a specific purchase order by ID
  getOrderById$(poId: string): Observable<PurchaseOrder | undefined> {
    return this.orders$.pipe(
      map(orders => orders.find(order => order.poId === poId))
    );
  }

  // Get current order by ID
  getCurrentOrderById(poId: string): PurchaseOrder | undefined {
    return this.currentOrders.find(order => order.poId === poId);
  }

  // Get orders by status
  getOrdersByStatus$(status: string): Observable<PurchaseOrder[]> {
    return this.orders$.pipe(
      map(orders => orders.filter(order => order.status === status))
    );
  }

  // Get current orders by status
  getCurrentOrdersByStatus(status: string): PurchaseOrder[] {
    return this.currentOrders.filter(order => order.status === status);
  }

  // Get orders with alerts
  getOrdersWithAlerts$(): Observable<PurchaseOrder[]> {
    return this.orders$.pipe(
      map(orders => orders.filter(order => order.poAlerts && order.poAlerts.length > 0))
    );
  }

  // Get current orders with alerts
  getCurrentOrdersWithAlerts(): PurchaseOrder[] {
    return this.currentOrders.filter(order => order.poAlerts && order.poAlerts.length > 0);
  }

  // Get orders by priority tag
  getOrdersByPriority$(priority: string): Observable<PurchaseOrder[]> {
    return this.orders$.pipe(
      map(orders => orders.filter(order => 
        order.poTags?.some(tag => tag.key === 'Priority' && tag.value === priority)
      ))
    );
  }

  // Get current orders by priority
  getCurrentOrdersByPriority(priority: string): PurchaseOrder[] {
    return this.currentOrders.filter(order => 
      order.poTags?.some(tag => tag.key === 'Priority' && tag.value === priority)
    );
  }

  // Get total value of all orders
  getTotalOrderValue$(): Observable<number> {
    return this.orders$.pipe(
      map(orders => orders.reduce((total, order) => total + order.totalValue, 0))
    );
  }

  // Get current total value
  getCurrentTotalOrderValue(): number {
    return this.currentOrders.reduce((total, order) => total + order.totalValue, 0);
  }

  // Get count of orders
  getOrderCount$(): Observable<number> {
    return this.orders$.pipe(map(orders => orders.length));
  }

  // Get current order count
  getCurrentOrderCount(): number {
    return this.currentOrders.length;
  }
}
