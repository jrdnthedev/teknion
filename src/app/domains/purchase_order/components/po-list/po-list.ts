import { Component, inject, signal, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PoService } from '../../services/po-service/po-service';
import { AsyncPipe } from '@angular/common';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Nav } from '../../../../layout/components/nav/nav';

@Component({
  selector: 'app-po-list',
  imports: [RouterOutlet, AsyncPipe, Nav],
  templateUrl: './po-list.html',
  styleUrl: './po-list.css',
})
export class PoList implements OnInit, OnDestroy {
  purchaseOrderService = inject(PoService);
  purchaseOrder$ = this.purchaseOrderService.orders$;
  showWelcome = signal(true);
  private destroy$ = new Subject<void>();
  constructor(private router: Router) {}

  ngOnInit() {
    this.checkRouteState();

    // Listen for route changes
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.checkRouteState()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private checkRouteState() {
    const currentUrl = this.router.url;
    this.showWelcome.set(currentUrl.endsWith('/purchase-order'));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
