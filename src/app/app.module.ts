import { NgModule } from '@angular/core';

//* Imports - Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';

//* Declarations - Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';

//* Providers - Services
import { EmployeeService } from "./services/employee.service";
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
