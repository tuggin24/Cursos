import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, reduce, filter, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime, auditTime, throttleTime, sampleTime, mergeMap, takeUntil, pluck } from 'rxjs/operators';
import { from, fromEvent, of, mergeWith, mergeAll, interval } from 'rxjs';

@Component({
  selector: 'app-platzi-board',
  templateUrl: './platzi-board.component.html',
  styleUrls: ['./platzi-board.component.scss']
})
export class PlatziBoardComponent implements OnInit {

  @ViewChild('reactiveCanvas') canvas!: ElementRef;
  canvasElement: any;
  cursorPosition = { x: 0, y: 0 };

  constructor() { 

    //EJERCICIOS DE PRACTICA INICIO

    //OPERADORES DE TRANSFORMACION
    const numebers$ = from([1, 2, 3, 4, 5, 6, 7, 8]).
    pipe(
      /**MAP: MODIFICA LA RESPUESTA QUE SE ENVIA A LOS OBSERVABLES */
      map(number => number * 2),
      map(number => number ** 2),

      /**REDUCE: SUMA LOS VALORES A RETORNAR*/
      reduce((acc, val) => acc + val, 0),

      /**FILTER: FILTRA LOS VALORES A RETORNAR */
      filter(number => number > 6)
    );

    numebers$.subscribe(console.log)
    
    //OPERADORES DE DISTINCION
    const repeatedNumbers$ = of(1, 2, 3, 3, 4, 4, 2, 1, 2, 2, 3).
    pipe(
      /*DISTINCT: RETORNO LOS ELEMENTOS UNICOS, ES DECIR SI HAY 3 IGUALES RETORNA 1 SOLO */
      distinct(),
      /**DISTINCTUNTILCHANGE: RETORNA LOS ELEMENTOS QUE NO SE REPITAN SEGUIDO, ES DECIR, 1,1->RETONA 1 Y 1,2,1->RETORNA TODO */
      distinctUntilChanged()
    );
    repeatedNumbers$.subscribe((event) => {
      // console.log('Number Distinc ->', event);
    });

    const repeatedObject$ = of({k:1},{k:1},{k:2},{k:3},{k:3},{k:3},{k:4},{k:5},{k:4},{k:6},{k:5},{k:1}).
    pipe(
      /**DISTINCTUNTILKEYCHANGE: FUNCIONA IGUAL QUE EL DISTINCTUNTILCHANGE PERO CON OBJETOS */
      distinctUntilKeyChanged('k')
    );
    repeatedObject$.subscribe((event) => {
      // console.log('Repeated Objects->', event);
    });
    
    //OPERADORES DE TIEMPO
    const onClicks$ = fromEvent(document, 'click').
    pipe(
      debounceTime(300), //Al recibir una peticion empieza el contador, y al finalizar ese tiempo retorna el utlimo, si en ese lapso recibe una peticion se reinicia el tiempo
      auditTime(300), //Empieza el temporizador y luego retorna el ultimo valor que hubo en ese lapso de tiempo
      throttleTime(300), //Emite el primer valor y luego empieza el temporizador e ignora si hubo peticiones en ese tiempo y al acabar retorna el primer valor
      sampleTime(1000)//Empieza el temporizador y retorna la ultima peticion que haya llegado en ese lapso de tiempo
    )

    onClicks$.subscribe((e:any) => {
      // console.log('click->', e.clientX);
    });

    //OPERADORES DE FUCION

    //FUCIONA LA RESPUESTA DE MULTIPLES OBSERVABLES EN 1 SOLO OBSERVABLE
    const onClick$ = fromEvent(document, 'click').pipe(map(event => event.type));
    const onMouse$ = fromEvent(document, 'mousemove').pipe(map(event => event.type));

    const eventsMerge$ = onMouse$.
    pipe(
      mergeWith(onClick$) 
    ).
    subscribe((e: any) => {
      // console.log('Event->', e)
    });
    
    //CONVIERTE UN OBSERVABLE DE ORDEN SUPERIOR EN PRIMER ORDEN QUE RETORNA SIMULTANEAMENTE TODOS LOS VALORES QUE
    //EMITEN SUS OBSERVABLES INTERNOS
    //Observable de orden superior: Observable que emite otros observables.
    const ordenSuperior$ = onClick$.pipe( map( () => interval(1000) ) );
    const primerOrden$ = ordenSuperior$
    .pipe(
      mergeAll() 
      
    );

    primerOrden$.subscribe(/*e => console.log('primerOrden->', e)*/);

    // Proyecta cada valor de fuente a un observable que se fusiona en la salida del observable. 
    //Es una mezcla entre mapear un observador y luego mezclar todos los valores que han sido emitidos.
    const letters$ = from(['A', 'B', 'C']);
    const result$ = letters$.
    pipe(
      mergeMap((letter: any) => interval(1000).
      pipe(
        map( (second: any) => {
          return letter + second
        })
      ))
    );

    result$.subscribe({
      next: (event) => {
        // console.log('MergeMap->', event);
      }
    })

    //TAKEUNTIL: PERMITE EMITIR VALORES HASTA QUE OTRO OBSERVABLE EMITA UN VALOR;

    const onMoves$ = fromEvent(document, 'mousemove');
    const onDonw$ = fromEvent(document, 'mousedown');

    const sourceCompleted$ = onMoves$.
    pipe(
      takeUntil(onDonw$)
    ).
    subscribe((e) => {
      // console.log('TakeUntil->', e);
    })

    //PLUCK: ME ROTORNA SOLO LA PRIPEDAD QUE YO QUIERA DEL OBJETO
    onMoves$.pipe(
      pluck('clientX')
    ).subscribe((e) =>{
      // console.log('pluck->', e);
    })

    //EJERCICIOS DE PRACTICA FIN
  }

  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement;


    const onMouserDown$ = fromEvent(this.canvasElement, 'mousedown');
    const onMouserUp$ = fromEvent(this.canvasElement, 'mouseup');
    const onMouserMove$ = fromEvent(this.canvasElement, 'mousemove').
    pipe(
      takeUntil(onMouserUp$)
    );


    onMouserDown$.subscribe((event) =>{
      this.updateCursosPosition(event);
    });

    const startPaint$ = onMouserDown$.
    pipe(
      map(() => onMouserMove$),
      mergeAll()
    );

    startPaint$.subscribe((e) => {
      this.paintStroke(e);
    })
  
  }

  updateCursosPosition(event: any){
    this.cursorPosition.x = event.clientX - this.canvasElement.offsetLeft;
    this.cursorPosition.y = event.clientY - this.canvasElement.offsetTop;
  }

  paintStroke(event: any){
    const canvasContext = this.canvasElement.getContext('2d');
    canvasContext.lineWidth = 8;
    canvasContext.lineJoin = "round";
    canvasContext.lineCap = "round";
    canvasContext.strokeStyle = "white";

    canvasContext.beginPath();
    canvasContext.moveTo(this.cursorPosition.x, this.cursorPosition.y);
    this.updateCursosPosition(event);
    canvasContext.lineTo(this.cursorPosition.x, this.cursorPosition.y);
    canvasContext.stroke();
    canvasContext.closePath();
  }
  

  ngOnInit(): void {

  }

  }
