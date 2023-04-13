import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service'
import { AuthService } from '../../services/auth.service'
import { Subscription } from 'rxjs';

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

  constructor(
    private storeService: StoreService,
    private authService: AuthService
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
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
    this.emailSub$.unsubscribe();
  }
}
