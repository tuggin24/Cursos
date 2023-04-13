import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product, UpdateProductDTO } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetails = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: ''
    },
    description: ''
  };
  limit = 10;
  offset = 0;


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    // this.productsService.getAllProducts()
    // .subscribe(data => {
    //   this.products = data;
    // });

    this.loadMore();
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  onShowDetail(id: string){
    this.productsService.getProduct(id).
    subscribe(data => {
      console.log('data->',data);
      this.productChosen = data;
      this.toggleProductDetail();
    } );
  }

  toggleProductDetail(){
    this.showProductDetails = !this.showProductDetails;
  }

  createNewProduct(){
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      description: 'Descripcion de producto',
      price: 150,
      images: [ 'https://placeimg.com/640/480/any?random=${Math.random()}', 'https://placeimg.com/640/480/any?random=${Math.random()}' ],
      categoryId: 2
    };
    this.productsService.create( product ).subscribe( data => {
      console.log('created->',data);
      this.products.unshift( data );
    } );
  }

  updateProduct(){
    let changes: UpdateProductDTO = {
      title : 'Nuevo Titulo Producto'
    };
    let id = this.productChosen.id;
    this.productsService.update( id, changes ).subscribe( data => {
      console.log('update->', data)
      this.productChosen = data;
      const productIndex = this.products.findIndex( item => item.id === this.productChosen.id );
      this.products[productIndex] = data
    } );
  }

  deleteProduct(){
    const id = this.productChosen.id;
    this.productsService.delete(id).subscribe( () => {
      const productIndex = this.products.findIndex( item => item.id === this.productChosen.id );
      this.products.splice( productIndex, 1 );
      this.showProductDetails = false;
    } );
  }

  loadMore(){
    this.productsService.getAllProducts( this.limit, this.offset ).subscribe( data => {
      this.products = this.products.concat( data );
      this.offset += this.limit;
    } )
  }

}
