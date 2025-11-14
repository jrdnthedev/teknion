import { Component, Input } from '@angular/core';
import { ShipmentInstanceModel } from '../../models/shipment_instance.model';
import { Accordion } from '../../../../shared/components/accordion/accordion';

@Component({
  selector: 'app-shipment-instance',
  imports: [Accordion],
  templateUrl: './shipment-instance.html',
  styleUrl: './shipment-instance.css',
})
export class ShipmentInstance {
  @Input() instance!: ShipmentInstanceModel;
}
