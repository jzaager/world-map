import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './world-map.svg',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @Output() countryClick = new EventEmitter();

  onClick(e: MouseEvent): void {
    this.countryClick.emit(e);
  }
}
