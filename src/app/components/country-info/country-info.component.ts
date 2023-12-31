import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
})

/* Add data to the HTML of CountryInfoComponent based on
what gets passed down from AppComponent */
export class CountryInfoComponent {
  @Input() name!: string;
  @Input() capital!: string;
  @Input() region!: string;
  @Input() incomeLevel!: string;
  @Input() latitude!: string;
  @Input() longitude!: string;
  @Input() countryClicked: boolean = false;
}
