import { Component, Input } from '@angular/core';
import { ShipmentModel } from '../../models/shipment.model';
import { Shipment } from '../shipment/shipment';

@Component({
  selector: 'app-shipments-list',
  imports: [Shipment],
  templateUrl: './shipments-list.html',
  styleUrl: './shipments-list.css',
})
export class ShipmentsList {
  @Input() shipment!:ShipmentModel[];
}
