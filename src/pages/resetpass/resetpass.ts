import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'page-resetpass',
  templateUrl: 'resetpass.html',
})
export class ResetPassPage {

  email: string;
  resetpasstitle: string = "";
  textresetpass: string = "";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private api: ApiProvider,
    private translate: TranslateService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  resetPass() {

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  
    if (this.email == '' || this.email == undefined) {
      this.showAlert(this.i18n('form.mandatory.fields'))
    } 
    else if(!regexp.test(this.email)) {
      this.showAlert(this.i18n('mail.wrong'))
    } else {
        this.api.resetPassPost(this.email).subscribe(data => {
          console.log(data);
        })
        this.email = '';
        this.showAlert(this.i18n('mail.sent.1') + this.email + this.i18n('mail.sent.2'))
    }
  }

  private i18n(key: string): string {
    return this.translate.instant(key)
  }

  private showAlert(message) {
    let alert = this.alertCtrl.create({
      title: this.i18n('title'),
      subTitle: message,
      buttons: [this.i18n('accept')]
    });
    alert.present();
  }
}
