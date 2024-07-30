import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';
import { VehicleModel } from './models/vehicle.model';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleService);
  });

  it('should list vehicles', fakeAsync(() => {
    let fetchedVehicles: Array<VehicleModel> = [];
    service.getVehicles().subscribe((vehicles: Array<VehicleModel>) => fetchedVehicles = vehicles);

    tick(200);
    expect(fetchedVehicles.length).withContext('The service should return the races after a 1000ms delay').toBe(0);

    tick(1000);

    expect(fetchedVehicles.length).withContext('The service should return 15 vehicles in an Observable after 1000ms')
    .toBe(15);
  }));
});
