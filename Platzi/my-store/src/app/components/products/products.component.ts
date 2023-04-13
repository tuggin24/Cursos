import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
    
    total:number = 0;
    myShoppingCart: Product[] = [];
    products:Product[] = [];
    today = new Date();
    date = new Date(2021, 1, 21);

    constructor(
        private storeService: StoreService,
        private productsService: ProductsService,
    ){
        this.myShoppingCart = storeService.getShoppingCart();
    }

    ngOnInit(): void {
        this.productsService.getAllProducts().
        subscribe( data => {
            this.products = data
        } );
    }

    

    addToShoppingCart(product:Product){
       this.storeService.addProduct( product );
       this.total = this.storeService.getTotal();
    }

}
