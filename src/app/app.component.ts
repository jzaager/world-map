import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Interactive World Map';

  fetchCountryData(e: MouseEvent) {
    console.log(e.target);
  }
}
