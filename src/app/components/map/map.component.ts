import { Component, Output, EventEmitter } from '@angular/core';

import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-map',
  templateUrl: './world-map.svg',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @Output() pathClicked = new EventEmitter();

  constructor(private countryService: CountryService) {}

  onClick(e: MouseEvent): void {
    const clickedElement = e.target as HTMLElement;
    if (clickedElement.tagName === 'path') {
      let targetId = (e.target as Element).id;

      this.countryService.getCountryData(targetId).subscribe((data: any) => {
        let responseData = data[1][0];
        this.pathClicked.emit(responseData);
      });

      this.pathClicked.emit(e);
    }
  }
}
