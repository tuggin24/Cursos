import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    
    @Output() addedProduct = new EventEmitter<Product>();

    @Input() product: Product =  {
        id: '',
        title: '',
        image: '',
        price: 0,
        description: '',
        category: ''
    };

    addToCart(){
        this.addedProduct.emit(this.product);
    }
}
