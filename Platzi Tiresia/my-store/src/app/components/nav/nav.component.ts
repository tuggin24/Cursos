import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  activeMenu = false;
  counter = 0;
  private sub$!: Subscription;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.sub$ = this.storeService.myCart$.subscribe( products => {
      this.counter = products.length;
    } );
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  ngOnDestroy(): void {
      this.sub$.unsubscribe();
  }

}
