import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service'
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categoryId: string | null = null;
  limit = 10;
  offset = 0;
  @Input() products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
      this.categoryId = params.get('id');
      if(this.categoryId){
        this.productsService.getByCategory( this.categoryId, this.limit, this.offset )
        .subscribe( (response) =>{
          this.products = response;
        } );
      }
    } );
  }

}
