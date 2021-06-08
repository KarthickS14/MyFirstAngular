import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponsedata } from '../authService';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
issighnup = true;
isloading = false;
error :string = null;

  constructor(private authService: AuthService,private activatedroute: ActivatedRoute,private route: Router) { }

  ngOnInit() {
  }

  onSignup(){
    this.issighnup = !this.issighnup;
  }
  onSubmit(loginform: NgForm){
    if(!loginform.valid){
      return;
    }
    this.isloading = true;
    const email = loginform.value.email;
    const password = loginform.value.password;
    let authObs: Observable<AuthResponsedata>;

    if(this.issighnup){
      authObs =  this.authService.onLogin(email,password);
      
    }else{
      authObs = this.authService.sighnUp(email,password);
    }
      authObs.subscribe(responseData =>{
        this.isloading=false;
        this.route.navigate(['/home']);
      },errorRes =>{
        this.error = errorRes;
        this.isloading = false;
      });

    loginform.reset();
  }

  

}
