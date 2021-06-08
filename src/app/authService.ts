import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { User } from './login-page/user-model';
import { Router } from '@angular/router';

export interface AuthResponsedata{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn : string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
user = new BehaviorSubject<User>(null);
private ExpirationTimer: any;
    constructor(private http: HttpClient,private route:Router){
    }
sighnUp(email:string,password:string){
    return this.http.post<AuthResponsedata>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMY0mcxZpKHLpgLtbJF5ISFw2jOrSjkf0',{
            email: email,
            password: password,
            returnSecureToken: true
    }).pipe(catchError(this.errorResponse),tap(resData =>{
        this.handleAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
    }));
}

onLogin(email: string,password: string){
    return this.http.post<AuthResponsedata>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMY0mcxZpKHLpgLtbJF5ISFw2jOrSjkf0',{
        email: email,
        password: password,
        returnSecureToken: true
    }).pipe(catchError(this.errorResponse),tap(resData =>{
        this.handleAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
    }));;
  }

  autoLogin(){
      const userData:{email:string;
            id: string;
             _token: string;
        _tokenExpirationDate: string} = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return;
        }
        const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));
        if(loadedUser.token){
            this.user.next(loadedUser);
            const currentexpiration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autologout(currentexpiration);
        }
  }

  autologout(ExpirationTimer: number){  
    this.ExpirationTimer = setTimeout(() => {
        this.logOut();
    }, ExpirationTimer);
  }


  logOut(){
      this.user.next(null);
      this.route.navigate(['loginPage']);
      localStorage.removeItem('userData');
  }

  private handleAuth(email:string,userId:string,token:string, ExpirationDate: number){
    const expiresInDate = new Date(new Date().getTime() + +ExpirationDate * 1000);
        const user = new User(
            email,userId,token,expiresInDate
        );
        this.user.next(user);
        this.autologout(ExpirationDate * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
  }

  private errorResponse(errorRes: HttpErrorResponse){
    let errorMessage = "an Unknown Error Occurred!"
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'This E-mail Already Exists!'
            break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Please Enter a Correct Password!'
            break;
            case 'EMAIL_NOT_FOUND':
                    errorMessage = 'Enter a valid e-mail address'
            break;
            case 'USER_DISABLED' :
                errorMessage = 'your Account is Disabled,please reach your admin' 
            break; 
        }
        return throwError(errorMessage);
  }
}
