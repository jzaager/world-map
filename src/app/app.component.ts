import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Interactive World Map';

  ngOnInit(): void {
    this.addEventsToPaths();
  }

  addEventsToPaths(): void {
    Array.from(document.querySelectorAll('path')).forEach((path) =>
      path.addEventListener('click', this.fetchCountryData)
    );
  }

  // @TODO: Create service to fetch data
  // This func will call this.service.fetchCountryData...etc
  async fetchCountryData(e: MouseEvent) {
    let url = 'http://api.worldbank.org/v2/country/';
    let requestFormat = '?format=json';
    let elementId: string = (e.target as Element).id;
    try {
      let response = await fetch(`${url}${elementId}${requestFormat}`);
      let results = await response.json();
      let countryData = results[1][0];
      console.log(countryData);
    } catch (err) {
      console.log(err);
    }
  }
}
