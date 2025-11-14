import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentInstance } from './shipment-instance';

describe('ShipmentInstance', () => {
  let component: ShipmentInstance;
  let fixture: ComponentFixture<ShipmentInstance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentInstance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentInstance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
