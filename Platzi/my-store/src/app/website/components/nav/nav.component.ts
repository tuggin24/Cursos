import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service'
import { AuthService } from '../../../services/auth.service'
import { CategoriesService } from '../../../services/categories.service'
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{


  activeMenu = false;
  sub$!: Subscription;
  emailSub$!: Subscription;
  counter = 0;
  emailUser: string = '';
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService
  ){

  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
    console.log('activeMenu',this.activeMenu);
  }

  ngOnInit(): void {
    this.sub$ = this.storeService.myCart$.subscribe( products => {
      this.counter = products.length;
    } );

    this.emailSub$ = this.authService.email$.subscribe( (email) => {
      this.emailUser = email;
    })

    this.getAllCategories();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
    this.emailSub$.unsubscribe();
  }

  getAllCategories(){
    this.categoriesService.getAll()
    .subscribe({
      next: (res) => {
        this.categories = res;
      }
    })
  }
}
