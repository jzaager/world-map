import { Injectable } from '@angular/core';
import { Country } from '../Country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  name: string = '';
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  latitude: string = '';
  longitude: string = '';

  async fetchCountryData(countryId: string): Promise<Country> {
    let url = 'http://api.worldbank.org/v2/country/';
    let requestFormat = '?format=json';
    try {
      let response = await fetch(`${url}${countryId}${requestFormat}`);
      let results = await response.json();
      let countryData = results[1][0];

      console.log(countryData);

      this.name = countryData.name;
      this.capital = countryData.capitalCity;
      this.region = countryData.region.value;
      this.incomeLevel = countryData.incomeLevel.value;
      this.longitude = countryData.longitude;
      this.latitude = countryData.latitude;
    } catch (err) {
      console.log('Error is:', err);
    }
    return {
      name: this.name,
      capital: this.capital,
      region: this.region,
      incomeLevel: this.incomeLevel,
      longitude: this.longitude,
      latitude: this.latitude,
    };
  }
}
