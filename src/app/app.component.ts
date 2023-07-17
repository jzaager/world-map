import { Component, OnInit } from '@angular/core';

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
  fetchCountryData(e: MouseEvent) {
    console.log(e.target);
  }
}
