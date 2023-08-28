// import { AfterViewInit, ElementRef, QueryList, ViewChildren } from "@angular/core";

// const regex: RegExp = /[a-z]/i;


// export class Wordle implements AfterViewInit{
  
//   wordleRows: any;
//   wordleRows2 =  Array.from(document.querySelectorAll(".letter-row"));
//   @ViewChildren('div') letterRow2!: QueryList<ElementRef>;

// 	constructor(
// 		private maxIndex: number,
// 		private maxRow: number,
// 		private index: number = 0,
// 		private rowIndex: number = 0,
// 	){
// 		this.maxIndex--;
// 		this.maxRow--;
//     this.wordleRows = Array.from(this.letterRow2);
//     console.log('wordleRows',this.wordleRows)
// 	}

//   ngAfterViewInit() {
//     console.log('wordleRows2',(this.wordleRows2))
//   }

// 	private alterWordle = (addingLetter: boolean): void => {
// 		if (addingLetter) {
// 			if (this.maxIndex > this.index) {
// 				this.alterIndex(true);
// 			} else {
// 				this.alterIndex(true, true);
// 				this.alterRowIndex(true);
// 			}
// 		} else {
// 			if (this.index === 0 && this.rowIndex !== 0) {
// 				this.alterIndex(false, false);
// 				this.alterRowIndex(false);
// 			} else if(this.index !== 0){
// 				this.alterIndex(false);
// 			}
// 		}
// 	}

// 	public writeLetter = (letter: string): void => {
//     console.log(this.wordleRows)
// 		this.wordleRows[this.rowIndex].children[this.index].textContent = letter.toUpperCase();
// 		this.alterWordle(true);
// 	};

// 	public deleteLetter = () => {
// 		this.alterWordle(false);
// 		this.wordleRows[this.rowIndex].children[this.index].textContent = " ";
// 	};

// 	private alterIndex = (isIncreasing: boolean, atBeginning?: boolean): void => {
// 		if (atBeginning === undefined) {
// 			if(isIncreasing) {
// 				this.index++;
// 			} else {
// 				this.index--;
// 			}
// 		} else {
// 			if (isIncreasing && atBeginning){
// 				this.index = 0;
// 			} else if (!isIncreasing && !atBeginning){
// 				this.index = this.maxIndex;
// 			}
// 		}

// 	}

// 	private alterRowIndex = (isIncreasing: boolean): void => {
// 		if(isIncreasing && this.rowIndex < this.maxRow) {
// 			this.rowIndex++;
// 		} else if (isIncreasing && this.rowIndex !== 0){
// 			this.rowIndex--;
// 		}
// 	}

// }