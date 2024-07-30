import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '../models/vehicle.model';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {

  vehicles: VehicleModel[] = [];
  loading: boolean = true;

  constructor(vehicleService: VehicleService) {
    vehicleService.getVehicles().subscribe((vehicles: VehicleModel[]) => {
      this.vehicles = vehicles;
      this.loading = false;
    });
  }
}
