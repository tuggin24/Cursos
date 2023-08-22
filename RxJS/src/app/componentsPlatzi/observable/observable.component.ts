import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  observableAlfa$ = new Observable(Subscriber => {
    Subscriber.next(1);
    Subscriber.next(2);
    Subscriber.next(3);
    Subscriber.complete();
    Subscriber.error('Chale');
    Subscriber.next(4);
    Subscriber.next(5);
  });

  constructor() { }

  ngOnInit(): void {
    const  observador: Observer<any> = {
      next: (value:any) => {
        console.log(value);
      },
      complete: () => {
        console.log('Observable Completado')
      },
      error: (error:any) => {
        console.log('Error Recibido:', error);
      }
    };

    this.observableAlfa$.subscribe(observador);
  }

}
