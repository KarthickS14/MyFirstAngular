import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private authSub : Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoLogin();
  this.authSub =   this.authService.user.subscribe(userAuth =>{
     this.isAuthenticated = !!userAuth;
  });
  }

  Onlogout(){
    this.authService.logOut();
  }
}
