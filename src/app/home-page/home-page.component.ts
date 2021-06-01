import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityModel } from '../city-model';
import { CityData } from '../citydata.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit , OnDestroy{
 cities : CityModel[]=[];
 id = '';
  constructor(private cityData: CityData ,private route: Router,private aRoute: ActivatedRoute) { }

  ngOnInit() {
   this.cities = this.cityData.selectCity();
  }
  onSelect(form:NgForm){
    this.id = form.value.cities;
    this.route.navigate(['/hospitalinfo',this.id],{relativeTo:this.aRoute});
  }
  ngOnDestroy(){
  }


}
