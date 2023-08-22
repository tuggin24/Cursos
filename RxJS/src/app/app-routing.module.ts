import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './componentsPlatzi/from-event/from-event.component';
import { ObservableComponent } from './componentsPlatzi/observable/observable.component';
import { BaseComponent } from './plaziWordle/components/base/base.component';

const routes: Routes = [
  {
    path: 'fromEvent', component: FromEventComponent
  },
  {
    path: 'observable', component: ObservableComponent
  },
  {
    path: 'wordle', component: BaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
