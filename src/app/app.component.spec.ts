import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { VehiclesComponent } from './vehicles/vehicles.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MenubarModule
    ],
    declarations: [ Menubar ],
    schemas: [NO_ERRORS_SCHEMA]
  }).compileComponents());

  it('should use the menu component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('app-menu'))
    .withContext('You probably forgot to add MenuComponent to the AppComponent template')
    .not.toBeNull();
  });

  it('should use the vehicles component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('app-vehicles'))
      .withContext('You probably forgot to add VehiclesComponent to the AppComponent template')
      .not.toBeNull();
  });
});
