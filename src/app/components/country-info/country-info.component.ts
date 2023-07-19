import { Component, Input } from '@angular/core';

import { Country } from 'src/app/Country';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
})
export class CountryInfoComponent {
  @Input() name!: string;
  @Input() capital!: string;
  @Input() region!: string;
  @Input() incomeLevel!: string;
  @Input() latitude!: string;
  @Input() longitude!: string;

  responseData: any;
  country!: Country;

  constructor() {}

  setClickedCountry(countryData: any): any {}

  updateUi(country: any) {}
}
