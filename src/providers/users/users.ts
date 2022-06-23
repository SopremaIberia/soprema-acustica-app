import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../api/api';

@Injectable()
export class UsersProvider {

  user: any;
  infousers: any[] = [];

  constructor(public http: HttpClient, 
    private api: ApiProvider) {
 
  }
 
  checkUser(item) {
    return this.api.loginPost(item);
  }

  userInfo(): Observable<any> {
    if(this.user != undefined) {
      let id = this.user['current_user']['uid']
      return this.api.userInfo(id);
    }
  }

  updateUser(item): Observable<any> {
    if(this.user != undefined) {

      let id = this.user['current_user']['uid']
      return this.api.updateUser(item,id);
    }
  }

  setUser(user) {
    this.user = user
  }

}