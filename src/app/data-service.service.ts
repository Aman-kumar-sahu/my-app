import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  arr=[{
    Company:'IBM',
    Contact:'Arvind Krishna',
    Country:'India'
  },{
    Company:'TCS',
    Contact:'Ratan Tata',
    Country:'India'
  }];
}
