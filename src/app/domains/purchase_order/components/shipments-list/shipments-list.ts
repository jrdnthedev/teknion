import { Component } from '@angular/core';
import { Shipment } from '../shipment/shipment';

@Component({
  selector: 'app-shipments-list',
  imports: [Shipment],
  templateUrl: './shipments-list.html',
  styleUrl: './shipments-list.css',
})
export class ShipmentsList {

}
