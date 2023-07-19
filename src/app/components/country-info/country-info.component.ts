import { Component, ChangeDetectorRef } from '@angular/core';

import { Country } from 'src/app/Country';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
})
export class CountryInfoComponent {
  responseData: any;
  country!: Country;
  countryName: string = '';
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  latitude: string = '';
  longitude: string = '';

  constructor() {}

  setClickedCountry(countryData: any): any {
    let country = {
      name: this.responseData.name,
      capital: this.responseData.capitalCity,
      region: this.responseData.region.value,
      incomeLevel: this.responseData.incomeLevel.value,
      latitude: this.responseData.latitude,
      longitude: this.responseData.longitude,
    };
    this.country = country;
    this.updateUi(country);
    return country;
  }

  updateUi(country: any) {
    let infoContainer = document.querySelector('.infoContainer');
    let nameField = (document.createElement(
      'p'
    ).textContent = `${this.country.name}\n`);
    let capitalField = (document.createElement(
      'p'
    ).textContent = `${this.country.capital}`);
    let regionField = (document.createElement(
      'p'
    ).textContent = `${this.country.region}`);
    let incomeLevelField = (document.createElement(
      'p'
    ).textContent = `${this.country.incomeLevel}`);
    let latitudeField = (document.createElement(
      'p'
    ).textContent = `${this.country.latitude}`);
    let longitudeField = (document.createElement(
      'p'
    ).textContent = `${this.country.longitude}`);

    infoContainer?.append(
      nameField,
      capitalField,
      regionField,
      incomeLevelField,
      latitudeField,
      longitudeField
    );
  }
}
