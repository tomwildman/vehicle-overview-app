import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VEHICLES } from './vehicle.constants';
import { VehicleModel } from '../../models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  public getVehicles(): Observable<VehicleModel[]> {
    return of(VEHICLES);
  }
}
