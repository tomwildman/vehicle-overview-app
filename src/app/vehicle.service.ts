import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { VEHICLES } from './core/vehicle/vehicle.constants';
import { VehicleModel } from './models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  public getVehicles(): Observable<VehicleModel[]> {
    // http get request to backend API endpoint for fetching vehicles
    return of(VEHICLES)
      .pipe(delay(1000));
  }
}
