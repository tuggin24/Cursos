import { Component, OnInit } from '@angular/core';
import { Observer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  
  letterIndex = 0;
  letterRow = 0;
  
  constructor() { }
  
  ngOnInit(): void {
    const onKeyDown$ = fromEvent(document, 'keydown');

    const insertLetter: Observer<any> = {
      next: (event) => {
        let pressedKey = event.key.toUpperCase();
        if(pressedKey.length === 1 && pressedKey.match(/[a-z]/i)){
          console.log('Event', pressedKey);
        }
      },
      error: (e) => {},
      complete: () => {}
    };

    onKeyDown$.subscribe(insertLetter);
  }

}
