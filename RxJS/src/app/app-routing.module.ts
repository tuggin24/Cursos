import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { MapFilterComponent } from './components/map-filter/map-filter.component';

const routes: Routes = [
  {
    path: '', component: RxjsComponent
  },
  {
    path: 'fromEvent', component: FromEventComponent
  },
  {
    path: 'mapFilter', component: MapFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
