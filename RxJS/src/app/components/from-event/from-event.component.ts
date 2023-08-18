import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  // @ViewChild('div') div: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const el = document.getElementById('div');

    // const mouseMove = fromEvent(el,'mousemove')
  }

}
