import { Component } from '@angular/core';
import { VEHICLES } from '../core/vehicle/vehicle.constants';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {

  vehicles = VEHICLES;

  loading: boolean = false;
}
