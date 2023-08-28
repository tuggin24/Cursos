import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromEventComponent } from './componentsPlatzi/from-event/from-event.component';
import { ObservableComponent } from './componentsPlatzi/observable/observable.component';
import { BaseComponent } from './plaziWordle/components/base/base.component';
import { PlatziBoardComponent } from './platzi-board/platzi-board.component';

@NgModule({
  declarations: [
    AppComponent,
    FromEventComponent,
    ObservableComponent,
    BaseComponent,
    PlatziBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
