import { Component } from '@angular/core';
import { Product } from './models/product.model'
import { FilesService } from '../app/services/files.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = '';
  //imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  showImg = true;
  imgRta = '';

  constructor(
    private filesService: FilesService
  ){

  }

  onLoaded(img:string){
      console.log('Log del padre', img)
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }

  donwloadPDF(){
    this.filesService.getFile( 'Prueba.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf' )
    .subscribe({
        next: (n) => {
            console.log(n)
        },
        error: () => {}
    })
  }

  onUpload( event: Event ){
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if(file){
      this.filesService.uploadFile(file)
      .subscribe({
        next: (rta) => {
          this.imgRta = rta.location
        },
        error: () => {}
      });
    }
  }
}
