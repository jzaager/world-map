import { Component, ChangeDetectorRef } from '@angular/core';

import { Country } from 'src/app/Country';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
})
export class CountryInfoComponent {
  responseData: any;
  countryName: string = '';
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  latitude: string = '';
  longitude: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  setClickedCountry(countryData: any): void {
    console.log(this.responseData);
    this.cdr.detectChanges();
    console.log(this.responseData);

    /* let country = {
        name: countryData.name,
        capital: countryData.capitalCity,
        region: countryData.region.value,
        incomeLevel: countryData.incomeLevel.value,
        latitude: countryData.latitude,
        longitude: countryData.longitude,
    };
    console.log(country);
    this.updateUi(country);
    return country; */
  }

  updateUi(country: Country) {
    this.countryName = country.name;
    this.capital = country.capital;
    this.region = country.region;
    this.incomeLevel = country.incomeLevel;
    this.latitude = country.latitude;
    this.longitude = country.longitude;
    console.log(this.countryName);
  }
}
