import { Component } from '@angular/core';
import { CountryInfoComponent } from './components/country-info/country-info.component';

import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Interactive World Map';
  responseData: any;

  constructor(
    private countryService: CountryService,
    private countryComponent: CountryInfoComponent
  ) {}

  getCountryData(countryId: string): void {
    this.countryService.getCountryData(countryId).subscribe({
      next: (response: any) => {
        // @TODO: Handle response
        let countryData = response[1][0];
        this.responseData = countryData;
        this.countryComponent.responseData = countryData;
        console.log(this.countryComponent.responseData);
        this.countryService.responseData = countryData;
        // this.countryComponent.setClickedCountry(countryData);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  getCountryName(e: MouseEvent): string {
    let countryId = (e.target as Element).id;
    return countryId ? countryId : 'No name provided';
  }
}
