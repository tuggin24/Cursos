import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const contador = interval(1000);

    contador.
    subscribe({
      next: (r) => {
        console.log(`Cada ${r} segundos`);
      },
      error: (e) => {
        console.log('Ocurrio un error->',e)
      }
    })
  }

}
