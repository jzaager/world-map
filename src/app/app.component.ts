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

  constructor(
    private countryService: CountryService,
    private countryComponent: CountryInfoComponent
  ) {}

  getCountryData(countryName: string): void {
    this.countryService.getCountryData(countryName);
  }

  getCountryName(e: MouseEvent): string {
    let countryName = (e.target as Element).getAttribute('name');
    //console.log(countryName);
    return countryName ? countryName : 'No name provided';
  }
}
