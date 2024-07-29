import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/vehicle/vehicle.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
