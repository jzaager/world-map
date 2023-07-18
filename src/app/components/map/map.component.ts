import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './world-map.svg',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @Output() countryClick = new EventEmitter();

  onClick(e: MouseEvent): void {
    const clickedElement = e.target as HTMLElement;
    if (clickedElement.tagName === 'path') {
      this.countryClick.emit(e);
    }
  }
}
