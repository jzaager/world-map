import { Component } from '@angular/core';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Interactive World Map';
  responseData: any;
  countryClicked: boolean = false;

  constructor(private countryService: CountryService) {}

  getCountryData(element: Element): void {
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
        this.responseData = countryData;
        this.countryClicked = true;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  getPathClicked(e: MouseEvent): Element {
    let pathClicked = e.target as Element;
    return pathClicked;
  }
}
