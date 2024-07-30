import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { VehiclesComponent } from './vehicles.component';
import { TableModule } from 'primeng/table';
import { FormatNamePipe } from '../format-name.pipe';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(() => 
    TestBed.configureTestingModule({
      declarations: [
        VehiclesComponent,
        FormatNamePipe
      ],
      imports: [TableModule]
    }));

  it('should display every vehicle', fakeAsync(() => {
    const fixture = TestBed.createComponent(VehiclesComponent);

    tick(1100);

    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const vehicles = element.querySelectorAll('table tbody tr');
    expect(vehicles.length).withContext('You should have an `tr` element per vehicle in your template').toBe(15);
  }));
});
