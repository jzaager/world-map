import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CountryInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
