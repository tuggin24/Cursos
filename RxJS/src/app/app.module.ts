import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { MapFilterComponent } from './components/map-filter/map-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    FromEventComponent,
    MapFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
