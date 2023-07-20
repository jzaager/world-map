import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Interactive World Map';

  name!: string;
  capital!: string;
  region!: string;
  incomeLevel!: string;
  latitude!: string;
  longitude!: string;
  countryClicked: boolean = false;

  constructor() {}

  setClickedCountry(countryData: any): void {
    this.name = countryData.name;
    this.capital = countryData.capitalCity;
    this.region = countryData.region.value;
    this.incomeLevel = countryData.incomeLevel.value;
    this.latitude = countryData.latitude;
    this.longitude = countryData.longitude;

    this.countryClicked = true;
  }

  /*   getCountryData(element: Element): void {
    this.countryService.getCountryData(element.id).subscribe({
      next: (response: any) => {
        let countryData;
        try {
          countryData = response[1][0];
        } catch (error) {
          console.error(
            `Invalid ID requested. API call had no valid response to country code: ${
              element.id
            } (${element.getAttribute('name')})`
          );
          return;
        }
        this.setCountryDetails(countryData);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  } */
}
