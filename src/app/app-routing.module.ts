import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalDataComponent } from './hospital-data/hospital-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './login-page/authguard';

const routes: Routes = [
  {path: '', redirectTo:'loginPage',pathMatch:'full'},
  {path: 'loginPage',component: LoginPageComponent},
  {path: 'home' ,component:HomePageComponent , canActivate: [AuthGuard]},
  {path: 'hospitalinfo/:id' , component: HospitalDataComponent ,canActivate: [AuthGuard]},
  {path: 'employeeForm',component: EmployeeFormComponent ,canActivate: [AuthGuard] },
  { path: '**' ,redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
