import { Component, Input } from '@angular/core';
import { ShipmentInstanceModel } from '../../models/shipment_instance.model';
import { Accordion } from '../../../../shared/components/accordion/accordion';
import { AlertBanner } from '../../../../shared/components/alert-banner/alert-banner';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shipment-instance',
  imports: [Accordion, AlertBanner, DatePipe],
  templateUrl: './shipment-instance.html',
  styleUrl: './shipment-instance.css',
})
export class ShipmentInstance {
  @Input() instance!: ShipmentInstanceModel;
}
