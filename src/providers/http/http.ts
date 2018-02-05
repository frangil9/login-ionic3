import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  public pathRandomUser : string = 'https://randomuser.me/api/?results=25';
  public pathAuth : string ='http://localhost:8080/login';
  public pathSignup : string ='http://localhost:8080/signup';
  
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }
  
  loadUsers(){
    return this.http.get(this.pathRandomUser);
  }

  login(usuario){
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(this.pathAuth, body, {headers: headers});
  }

  signup(user){
    let body = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(this.pathSignup, body, {headers: headers});
  }
}
