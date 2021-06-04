import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalDataComponent } from './hospital-data/hospital-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch:'full'},
  {path: 'home',component:HomePageComponent},
  {path: 'hospitalinfo/:id', component: HospitalDataComponent},
  {path: 'employeeForm',component: EmployeeFormComponent},
  { path: '**' ,redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
