import { Component, OnInit } from '@angular/core';
import { pipe, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.scss']
})
export class MapFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nums = of(1, 2, 3, 4, 5);

    const alCuadrado = pipe (
      filter( (n: number) => n % 2 === 0),
      map(n => n * n)
    );

    const cuadrado = alCuadrado(nums);

    cuadrado.
    subscribe((r)=>{
      console.log('resultado->',r)
    })
  }

}
