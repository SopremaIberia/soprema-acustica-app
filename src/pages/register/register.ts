import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TranslateService } from "@ngx-translate/core";
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ConfigurationProvider } from '../../providers/configuration/configuration';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  legal: boolean = false;
  password: string = "";
  repeatpass: string = "";
  company: string = "";
  tlf: string = "";
  province: string;
  keys: any[];
  usersinfo: any[];
  email: string = "";
  name: string = "";
  register_title: string = "";
  register: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private prov: ConfigurationProvider,
    private translate: TranslateService,
    private iab: InAppBrowser,
    private api: ApiProvider) {

    this.keys = this.prov.fillProvince();
  }

  ionViewDidLoad() { }

  registerUser() {

    if (this.validate()) {
      let item = {
        'pass': this.password,
        'name': this.name,
        'company': this.company,
        'tlf': this.tlf,
        'province': this.province,
        'mail': this.email
      }
      this.api.registerUser(item).subscribe(data => {
        if (data.status == 200) {
          this.showAlert(this.i18n('register.ok'));
          this.navCtrl.setRoot(LoginPage);
        }
      }, () => {
        this.showAlert(this.i18n('register.fail'));
      })
    }
  }

  validate() {
    if (!this.validField(this.email) || !this.validField(this.name)) {
      this.showAlert(this.i18n('form.mandatory.fields'));
      return false;
    }
    else if (this.password != this.repeatpass) {
      this.showAlert(this.i18n('password.not.equals'));
      return false;
    } else if(this.legal == false) {
      this.showAlert(this.i18n('legal.accept'));
      return false;
    }
    return true;
  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: this.i18n('title'),
      subTitle: msg,
      buttons: [this.i18n('accept')]
    });
    alert.present();
  }

  validField(field) {
    if (field == undefined || field == '') {
      return false;
    }
    return true;
  }

  openLegal() {
  }

  private i18n(key: string): string {
    return this.translate.instant(key)
  }
}
