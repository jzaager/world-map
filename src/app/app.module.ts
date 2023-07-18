import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';

@NgModule({
  declarations: [AppComponent, MapComponent, CountryInfoComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CountryInfoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
