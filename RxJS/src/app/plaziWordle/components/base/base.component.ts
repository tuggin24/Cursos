import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, Renderer2 } from '@angular/core';
import { Observer, Subject, fromEvent } from 'rxjs';
import { WordList } from './wordList';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})

export class BaseComponent implements OnInit {
  
  @ViewChildren('div') letterRow2!: QueryList<ElementRef>;
  @ViewChild('message') message!: ElementRef;
  @ViewChild('restartButton') restartButton!: ElementRef;
  
  wordleRows: any;
  elementMessage : any;
  elementButton : any;
  maxIndex = 4;
  maxRow = 5;
  index: number = 0;
	rowIndex: number = 0;
  regex: RegExp = /[a-zA-Z]/i;

  userAnswer: Array<any> = []; //[C, U, R, S, O]
  rightWord: string = '';
  userWinOrLoose$ = new Subject();
   
  constructor(
    private renderer : Renderer2
  ) { 
  }
  
  ngOnInit(): void {
    const onKey$ = fromEvent<KeyboardEvent>(document, "keydown");

   
    
    onKey$.pipe(takeUntil(this.userWinOrLoose$)).subscribe(this.observatorBackSpace);
    onKey$.pipe(takeUntil(this.userWinOrLoose$)).subscribe(this.observatorCheckWork);
    onKey$.pipe(takeUntil(this.userWinOrLoose$)).subscribe(this.observatorLetter); //Se subscribe el observador al observable.

    this.userWinOrLoose$.
    subscribe({
      next: () => {
        let letterRows = this.wordleRows[this.rowIndex].nativeElement;
        console.log('letterRows->', letterRows);
        
        for(let i = 0; i < 5; i++){
          console.log('hijos->', letterRows.children[i])
          this.renderer.addClass(letterRows.children[i], 'letter-green')
        }
      }
    })


    this.rightWord = WordList[Math.floor(Math.random() * WordList.length)];
    console.log( this.rightWord )
  }

  ngAfterViewInit() {
    const wordleRows3   = this.letterRow2;
    this.wordleRows     = Array.from(wordleRows3);
    this.elementMessage =  this.message;
    this.elementButton = this.restartButton.nativeElement;
    
  }

  writeLetter(letter: string, rowIndex: number, index: number) {
    // console.log('letter->',letter,'rowIndex->',rowIndex,'index->',index)
    // console.log('aver->',this.wordleRows[rowIndex].nativeElement.children[index].textContent)
    this.wordleRows[rowIndex].nativeElement.children[index].textContent = letter.toUpperCase();
    this.renderer.addClass(this.wordleRows[rowIndex].nativeElement.children[index], 'filled-letter')
    this.alterWordle(true, rowIndex, index);
  };

  alterWordle(addingLetter: boolean, rowIndex: number, index: number){
    if (addingLetter) {
      if (this.maxIndex > index) {
        this.alterIndex(true);
      } else {
        this.alterIndex(true, true );
        // this.alterRowIndex(true);
      }
    } else {
      if (index === 0 && rowIndex !== 0) {
        this.alterIndex(false, false );
        // this.alterRowIndex(false);
      } else if(index !== 0){
        this.alterIndex(false );
      }
    }
  };

  alterIndex(isIncreasing: boolean, atBeginning?: boolean) {
    if (atBeginning === undefined) {
      if(isIncreasing) {
        this.index++;
      } else {
        this.index--;
      }
    } else {
      if (isIncreasing && atBeginning){
        // this.index = 0;
      } else if (!isIncreasing && !atBeginning){
        this.index = this.maxIndex;
      }
    }
  }

  alterRowIndex(isIncreasing: boolean) {
    if(isIncreasing && this.rowIndex < this.maxRow) {
      this.rowIndex++;
    } else if (isIncreasing && this.rowIndex !== 0){
      this.rowIndex--;
    }
  }

  deleteLetter(){
    this.alterWordle(false, this.rowIndex, this.index);
    this.wordleRows[this.rowIndex].nativeElement.children[this.index].textContent = " ";
    this.renderer.removeClass(this.wordleRows[this.rowIndex].nativeElement.children[this.index], 'filled-letter');
    this.userAnswer.pop();
  };


  //OBSERVADORES

  observatorLetter: Observer<any> = { //Se crea el observador que indica como usará la data obtenida.
    next: (event: KeyboardEvent) => {
      const keyPressed = event.key.toUpperCase();
  
      if (keyPressed.match(this.regex) && keyPressed.length === 1) {
        this.userAnswer.push(keyPressed);
        this.writeLetter(keyPressed, this.rowIndex, this.index);
      }
    },
    complete: () => {
      console.log("There is no more events");
    },
    error: (error: Error) => {
      console.log("Something went wrong: ", error.message);
    }
  }

  observatorBackSpace:Observer<any> = { //Se crea el observador que indica como usará la data obtenida.
    next: (event: KeyboardEvent) => {
      const keyPressed = event.key;
      console.log(keyPressed)
  
      if (keyPressed === "Backspace") {
        this.deleteLetter();
      }
    },
    complete: () => {
      console.log("There is no more events");
    },
    error: (error: Error) => {
      console.log("Something went wrong: ", error.message);
    }
  }

  observatorCheckWork: Observer<any> = {
    next: (event) => {
      if(event.key === "Enter"){

        const rightWord = Array.from(this.rightWord);

        for(let i = 0; i < 5; i++){
          let letterColor = '';
          let letterBox = this.wordleRows[this.rowIndex].nativeElement.children[i];
          let letterPosition = Array.from(this.rightWord).indexOf(this.userAnswer[i]);
          
          if( letterPosition === -1 ){
            letterColor = 'letter-grey';
          }else{
            if( rightWord[i] === this.userAnswer[i] ){
              letterColor = 'letter-green';
            }else{
              letterColor = 'letter-yellow';
            }
          }

          this.renderer.addClass(letterBox, letterColor);
        }

        if( this.userAnswer.join('') === this.rightWord ){
          this.elementMessage.nativeElement.textContent = `:D ¡Si! la palabra ${this.rightWord} es la correcta`;
          this.userWinOrLoose$.next('');
          this.elementButton.disabled = false;
        }else{
          this.index = 0;
          this.rowIndex++;
          this.userAnswer = [];

          if(this.rowIndex === 5){
            this.elementMessage.nativeElement.textContent = `:c Perdiste la palabra correcta era ${this.rightWord}`;
            this.userWinOrLoose$.next('');
            this.elementButton.disabled = false;
          }
        }

        
      }
    },
    error: (e) => {},
    complete: () => {}
  }

}
