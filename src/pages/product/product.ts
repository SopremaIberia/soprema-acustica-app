import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { ConfigurationPage } from '../configuration/configuration';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateService } from "@ngx-translate/core";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product: any;
  title: string;
  advantages: string = "";
  applications: string = "";
  conditioning: string = "";
  data_sheet: string = "";
  share: string = "";
  field_pr_data_sheet: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
    private translate: TranslateService,
    public alertCtrl: AlertController,
    private platform: Platform,
    private socialSharing: SocialSharing,
    private photoViewer: PhotoViewer) {
    this.product = this.navParams.get("item");
  }

  ionViewDidLoad() { }

  toConfiguration() {
    this.navCtrl.push(ConfigurationPage);
  }

  openIMG(img) {
    this.photoViewer.show(img);
  }

  showAlert(subtitle) {
    let alert = this.alertCtrl.create({
      title: this.i18n('title'),
      subTitle: subtitle,
      buttons: [this.i18n('accept')]
    });
    alert.present();
  }

  shareDocument(item) {

    if (item) {
      console.log(item)
      let file = item.field_pr_data_sheet;
      if (file != undefined && file != null) {
        //share(message?: string, subject?: string, file?: string | string[], url?: string): Promise<any>;
        let body = item.body;
        body = body.replace(/<\/?[^>]+(>|$)/g, "");
        let title = item.title.replace(/<\/?[^>]+(>|$)/g, "");

        console.log('body',body)
        console.log('title',title)
        let message = item.title + "\n\n" + item.body
        if(this.platform.is('android')) {
          let descarga = "Descarga la APP Android en https://play.google.com/store/apps/details?id=com.soprema.app";
          message = message + '\n\n\n' + descarga;
        }
        this.socialSharing.share(message, "Soprema " + title, file, file).then(() => {

        }).catch(() => {

        });
      } else {
        this.showAlert('No hay ficha asociada.');
      }
    }
  }

  download(item) {

    if (item) {
      if (item.field_pr_data_sheet != undefined) {
        let file = item.field_pr_data_sheet;
        this.iab.create(file, "_system");
      } else {
        this.showAlert('No hay ficha asociada.');
      }
    }
  }


  private i18n(key: string): string {
    return this.translate.instant(key)
  }

}
