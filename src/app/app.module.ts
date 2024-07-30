import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { MessagesModule } from 'primeng/messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './vehicle.service';
import { MenuComponent } from './menu/menu.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FormatNamePipe } from './format-name.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, VehiclesComponent, FormatNamePipe, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    InputTextModule,
    TagModule,
    MessagesModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
