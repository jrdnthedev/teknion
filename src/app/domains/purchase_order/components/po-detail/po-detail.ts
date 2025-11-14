import { Component } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { ShipmentsList } from '../shipments-list/shipments-list';

@Component({
  selector: 'app-po-detail',
  imports: [Card,ShipmentsList],
  templateUrl: './po-detail.html',
  styleUrl: './po-detail.css',
})
export class PoDetail {

}
