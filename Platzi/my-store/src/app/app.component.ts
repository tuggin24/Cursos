import { Component } from '@angular/core';
import { Product } from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = '';
  //imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  showImg = true;

  onLoaded(img:string){
      console.log('Log del padre', img)
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
