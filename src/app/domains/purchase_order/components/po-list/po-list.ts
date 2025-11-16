import { Component, inject, signal, OnInit, DestroyRef } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PoService } from '../../services/po-service/po-service';
import { AsyncPipe } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { Nav } from '../../../../layout/components/nav/nav';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-po-list',
  imports: [RouterOutlet, AsyncPipe, Nav],
  templateUrl: './po-list.html',
  styleUrl: './po-list.css',
})
export class PoList implements OnInit {
  purchaseOrderService = inject(PoService);
  purchaseOrder$ = this.purchaseOrderService.orders$;
  showWelcome = signal(true);
  private destroyRef = inject(DestroyRef);
  constructor(private router: Router) {}

  ngOnInit() {
    this.checkRouteState();

    // Listen for route changes
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.checkRouteState()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private checkRouteState() {
    const currentUrl = this.router.url;
    this.showWelcome.set(currentUrl.endsWith('/purchase-order'));
  }
}
