import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';
import { CreateUserDTO } from '../../../models/user.model'
import { DataAuth, Auth } from '../../../models/auth.model'
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  newUser: CreateUserDTO = {
    name: 'agus',
    email: 'agustin@gmail.com',
    password: '123456',
    role: 'customer'
  };

  loginUser: DataAuth = {
    email: 'john@mail.com',
    password: 'changeme'
  }

  token = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ){

  }

  createUser(){
    this.usersService.create( this.newUser )
    .subscribe({
      next: (res) => console.log('create',res),
      error: () => {}
    });
  }

  login(){
    this.authService.login( this.loginUser )
    .subscribe({
      next: (res) => {
        console.log('login',res.access_token);
        this.token = res.access_token;
      },
      error: () => {}
    })
  }

  loginAndGet(){
    this.authService.login( this.loginUser )
    .pipe(
      switchMap( () => this.authService.getProfile() )
    )
    .subscribe({
      next: (res) => {
        this.authService.email.next(res.email);
      },
      error: () => {}
    })
  }

  getProfile(){
    this.authService.profile( this.token )
    .subscribe({
      next: (res) => {
        this.authService.email.next(res.email);
      },
      error: () => {}
    })
  }

}
