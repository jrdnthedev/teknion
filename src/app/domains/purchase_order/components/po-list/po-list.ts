import { Component, inject, signal, OnInit, DestroyRef } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PoService } from '../../services/po-service/po-service';
import { AsyncPipe } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Nav } from '../../../../layout/components/nav/nav';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-po-list',
  imports: [RouterOutlet, AsyncPipe, Nav],
  templateUrl: './po-list.html',
  styleUrl: './po-list.css',
})
export class PoList implements OnInit {
  private router = inject(Router);
  purchaseOrderService = inject(PoService);
  private destroyRef = inject(DestroyRef);
  purchaseOrder$ = this.purchaseOrderService.orders$;
  showWelcome = signal(true);

  ngOnInit() {
    this.updateWelcomeState();

    // Listen for route changes
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.updateWelcomeState());
  }

  private updateWelcomeState() {
    this.showWelcome.set(this.router.url === '/purchase-order');
  }
}
