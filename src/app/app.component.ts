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

  /*   Set local variables with the data from the country that was clicked
  Local variables get passed into Country-Info-Component */
  setClickedCountry(countryData: any): void {
    this.name = countryData.name;
    this.capital = countryData.capitalCity;
    this.region = countryData.region.value;
    this.incomeLevel = countryData.incomeLevel.value;
    this.latitude = countryData.latitude;
    this.longitude = countryData.longitude;

    this.countryClicked = true;
  }
}
