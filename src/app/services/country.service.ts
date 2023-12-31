import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'http://api.worldbank.org/v2/country/';
  private requestFormat: string = '?format=json';

  constructor(private http: HttpClient) {}

  // Returns data from Worldbank API to MapComponent
  getCountryData(countryId: string): Observable<any> {
    let requestUrl = `${this.apiUrl}${countryId}${this.requestFormat}`;
    return this.http.get<any>(requestUrl);
  }
}
