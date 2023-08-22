import { Component, OnInit } from '@angular/core';
import { Observer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const onMouseMove$ =  fromEvent(document, 'mousemove');
    const onKeyDown$ =  fromEvent(document, 'keydown');

    const obervadorMouse: Observer<any> = {
      next: (event) => {
        console.log('Posicion X', event.clientX);
        console.log('Posicion Y', event.clientY);
      },
      complete: () => {},
      error: (e) =>{}
    };

    const obervadorKey: Observer<any> = {
      next: (event) => {
        console.log('KEY', event.key);
      },
      complete: () => {},
      error: (e) =>{}
    };

    // onMouseMove$.subscribe(obervadorMouse);
    onKeyDown$.subscribe(obervadorKey);
  }

}
