import { Component } from '@angular/core';
import { CountryInfoComponent } from './components/country-info/country-info.component';

import { Country } from './Country';

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

  getCountryName(e: MouseEvent): string {
    let countryName = (e.target as Element).getAttribute('name');
    return countryName || 'No name found';
  }

  async handleClick(e: MouseEvent) {
    this.countryComponent.setCountry(await this.getCountry(e));
  }

  async getCountry(e: MouseEvent): Promise<Country> {
    let elementId: string = (e.target as Element).id;
    let country = await this.countryService.fetchCountryData(elementId);
    return country;
  }
}
