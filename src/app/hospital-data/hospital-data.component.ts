import { Component, OnInit } from '@angular/core';
import { CityData } from '../citydata.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CityModel } from '../city-model';

@Component({
  selector: 'app-hospital-data',
  templateUrl: './hospital-data.component.html',
  styleUrls: ['./hospital-data.component.css']
})
export class HospitalDataComponent implements OnInit {
  cities : CityModel[];
  hospitalDetails : CityModel[];
  cityId: string;
  constructor(private citydata: CityData,private route: ActivatedRoute) { }

  ngOnInit() {
    this.cities = this.citydata.selectCity();
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('id')){
        this.cityId = paramMap.get('id');
        this.hospitalDetails =  this.cities.filter(i => i.id === this.cityId);
      }
    });
  }
}
