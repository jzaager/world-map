import { Component } from '@angular/core';

import { Country } from 'src/app/Country';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
})
export class CountryInfoComponent {
  countryName: string = '';
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  latitude: string = '';
  longitude: string = '';

  setCountry(country: Country): void {
    this.countryName = country.name;
    this.capital = country.capital;
    this.region = country.region;
    this.incomeLevel = country.incomeLevel;
    this.latitude = country.latitude;
    this.longitude = country.longitude;
  }
}
