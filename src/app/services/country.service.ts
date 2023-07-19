import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../Country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'http://api.worldbank.org/v2/country/';
  private requestFormat: string = '?format=json';

  name: string = '';
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  latitude: string = '';
  longitude: string = '';

  constructor(private http: HttpClient) {}

  getCountryData(countryId: string): Observable<any> {
    let requestUrl = `${this.apiUrl}${countryId}${this.requestFormat}`;
    let data = this.http.get(requestUrl);
    return data;
  }
}
