import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigurationProvider } from '../../providers/configuration/configuration';

const HOST: string = 'https://appacustica.soprema.es/';
const Endpointregister: string = 'user/register?_format=json';
const Endpointlogin: string = "user/login?_format=json";
const Endpointdocument: string = 'rest_api/v1/documents?_format=json';
const EndpointNotification: string = 'rest_api/v1/notifications?_format=json';
const EndpointProductRange: string = 'rest_api/v1/products_range?_format=json';
const EndpointCatalogue: string = 'rest_api/v1/isolation_products?_format=json';
const ENPOINTRESTPASS: string = 'rest_api/v1/user_reset_password?_format=json';
const EndpointAbout: string = 'rest_api/v1/about_us?_format=json';
const HTTP_FAIL_MESSAGE: String = "REQUEST FAILED";

@Injectable()
export class ApiProvider {

  documents: any;
  name: string;
  user: any;
  pass: string;
  csrf_token: any;
  logout_token: any;
  language: any = "es";

  constructor(
    public http: HttpClient,
    private configprov: ConfigurationProvider) {

    this.name = 'appacustica-soprema';
    this.pass = '-APP-SOPREMA-';
  }

  loginPost(item): Observable<any> {

    this.name = item.user;
    this.pass = item.password;
    return this.http.post(HOST + Endpointlogin, { "name": this.name, "pass": this.pass }, {
      headers: {
        "Content-Type": "application/json"
      }, observe: 'response'
    })
  }
  
  registerUser(item): Observable<any> {

    let body = {
      "name": { "value": item.mail },
      "mail": { "value": item.mail },
      "pass": { "value": item.pass },
      "field_user_fullname": { "value": item.name },
      "field_user_company": { "value": item.company },
      "field_user_phone": { "value": item.tlf }
    };
    return this.http.post(this.buildEndpoint(Endpointregister), body, {
      headers: {
        "Content-Type": "application/json"
      }, observe: 'response'
    })
  }

  resetPassPost(email) {
    let body = { "email": email };
    console.log(body);
    return this.http.post(this.buildEndpoint(ENPOINTRESTPASS), body, {
      headers: {
        "Content-Type": "application/json"
      }, observe: 'response'
    });
  }

  sendMessage(item): Observable<any> {
    let email = item.email;
    let message = item.message;

    let auth = btoa(this.name + ":" + this.pass);
    let host = HOST + 'rest_api/v1/fake_msg/?_format=json&message=' + message + '&email=' + email;
    let headers = {
      "Authorization": "Basic " + auth,
      "Content-Type": "application/json",
      "X-CSRF-Token": "a4VViMTy6JEWtj3_bo6IkSLVoGFPPS2LPah8vGSM-os"
    }
    return this.http.get(host, {
      headers: headers, observe: 'response'
    });
  }

  updateUser(item, id): Observable<any> {
    return Observable.create(observer => {
      let basicauth = btoa(this.name + ":" + this.pass);
      let host = HOST + 'user/' + id + '?_format=json';
      let body = {
        "field_user_fullname": [{ "value": item.name }],
        "field_user_company": [{ "value": item.company }],
        "field_user_phone": [{ "value": item.phone }]
      };
      if (item.pass != undefined && item.current_pass != undefined) {
        body['pass'] = [{ "existing": item.current_pass, "value": item.pass }]
      }

      let headers = {
        "Authorization": "Basic " + basicauth,
        "Content-Type": "application/json",
        "X-CSRF-Token": this.csrf_token
      }
      return this.http.patch(host, body, { headers }).subscribe(observer);
    });
  }

  documentGet() {
    return this.buildRequest(Endpointdocument);
  }

  notificationsGet(last?: number): Observable<any> {
    if (last != undefined) {
      let params = '&last=' + last;
      return this.buildRequest(EndpointNotification, params);
    } else {
      return this.buildRequest(EndpointNotification);
    }
  }

  productRangeGet() {
    return this.buildRequest(EndpointProductRange);
  }

  catalogueGet() {
    return this.buildRequest(EndpointCatalogue);
  }

  aboutGet() {
    return this.buildRequest(EndpointAbout);
  }


  userInfo(id: number): Observable<any> {
    let auth = btoa(this.name + ":" + this.pass);
    let host = HOST + '/user/' + id + '?_format=json';
    let headers = {
      "Authorization": "Basic " + auth,
      "Content-Type": "application/json",
      "X-CSRF-Token": "a4VViMTy6JEWtj3_bo6IkSLVoGFPPS2LPah8vGSM-os"
    }
    return this.http.get(host, {
      headers: headers, observe: 'response'
    });
  }

  private buildHeader(auth): {} {
    return {
      "Authorization": "Basic " + auth,
      "Content-Type": "application/json",
    }
  }

  buildEndpoint(endpoint: string, params?: string): string {
    this.language = this.configprov.currentLang();
    if (params != undefined) {
      endpoint += params;
    }
    if (this.language != undefined && this.language.id == 2) {
      return HOST + 'pt-pt/' + endpoint;
    }
    return HOST + endpoint;
  }

  private buildRequest(endpoint, params?: string): Observable<any> {

    return Observable.create(observer => {
      if (endpoint == undefined) {
        observer.error(HTTP_FAIL_MESSAGE);
      }
      if ((this.name == undefined || this.name == '') && (this.pass == undefined || this.pass == '')) {
        observer.error(HTTP_FAIL_MESSAGE);
      }

      let basicauth = btoa(this.name + ":" + this.pass);
      this.http.get(this.buildEndpoint(endpoint, params), {
        headers: this.buildHeader(basicauth), observe: 'response'
      }).subscribe(observer);
    });
  }

}