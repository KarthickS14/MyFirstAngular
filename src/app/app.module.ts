import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { HospitalDataComponent } from './hospital-data/hospital-data.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { DropDownDirectives } from './dropdown.directive';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoaddingSpinnerComponent } from './loadding-spinner/loadding-spinner.component';

@NgModule({
  declarations: [					
    AppComponent,
      HomePageComponent,
      HeaderComponent,
      HospitalDataComponent,
      EmployeeFormComponent,
      DropDownDirectives,
      LoginPageComponent,
      LoaddingSpinnerComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
