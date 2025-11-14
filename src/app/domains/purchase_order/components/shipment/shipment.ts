import { Component, Input } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { ShipmentModel } from '../../models/shipment.model';
import { ShipmentInstance } from '../shipment-instance/shipment-instance';
import { AlertBanner } from '../../../../shared/components/alert-banner/alert-banner';

@Component({
  selector: 'app-shipment',
  imports: [Card, ShipmentInstance, AlertBanner],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css',
})
export class Shipment {
  @Input() shipmentDetails!: ShipmentModel;
}
