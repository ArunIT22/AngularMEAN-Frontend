import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { GetEmployeeComponent } from './employee/get-employee/get-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    GetEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
