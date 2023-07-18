import { Component } from '@angular/core';
import { Country } from './Country';

import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Interactive World Map';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.addEventsToPaths();
  }

  addEventsToPaths(): void {
    Array.from(document.querySelectorAll('path')).forEach((path) =>
      path.addEventListener('click', (e) => {
        this.getCountry(e);
      })
    );
  }

  async getCountry(e: MouseEvent): Promise<Country> {
    let elementId: string = (e.target as Element).id;
    let country = await this.countryService.fetchCountryData(elementId);
    return country;
  }
}
