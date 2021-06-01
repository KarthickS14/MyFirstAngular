import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { CityModel } from './city-model';

@Injectable({providedIn: 'root'})
export class CityData {
    selectedCity = new Subject<CityModel[]>();
private cities = [
    {id:'0',city:'Chennai',hname:'Chennai hospital',haddress:'No 2 test Adress',nobeds:120,avabeds:25},
    {id:'1',city:'Trichy',hname:'Trichy Hospital',haddress:'No 3 test Adress',nobeds:160,avabeds:35},
    {id:'2',city:'Cuddalore',hname:'Cuddalore Hospital',haddress:'No 4 test Adress',nobeds:170,avabeds:45},
    {id:'3',city:'Erode',hname:'Erode Hospital',haddress:'No 5 test Adress',nobeds:115,avabeds:55},
    {id:'4',city:'Salem',hname:'Salem hospital',haddress:'No 6 test Adress',nobeds:140,avabeds:65},
    {id:'5',city:'Madurai',hname:'Madurai Hospital',haddress:'No 7 test Adress',nobeds:150,avabeds:75}
]

    selectCity(){
       return this.cities.slice();
       this.selectedCity.next([...this.cities]);
       
    }
    citySelect(){
        return this.selectedCity.asObservable();
    }
    getcity(cityId: string){
        
    }

}