import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './world-map.svg',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @Output() countryClick = new EventEmitter();

  ngOnInit(): void {
    let paths = Array.from(document.querySelectorAll('path'));
    paths.forEach((path) => {
      path.addEventListener('click', (e: MouseEvent) => {
        this.onClick(e);
      });
    });
  }

  onClick(e: MouseEvent): void {
    this.countryClick.emit(e);
  }
}
