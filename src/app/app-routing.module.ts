import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalDataComponent } from './hospital-data/hospital-data.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch:'full'},
  {path: 'home',component:HomePageComponent},
  {path: 'hospitalinfo/:id', component: HospitalDataComponent},
  { path: '**' ,redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
