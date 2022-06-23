import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiProvider } from '../../providers/api/api';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'page-infocompany',
  templateUrl: 'infocompany.html',
})
export class InfocompanyPage {

  info_soprema_workers: string = "";
  info_soprema_countries: string = "";
  info_soprema_succes: string = "";
  info_soprema_definition: string = "";
  info_soprema_points: string = "";
  info_soprema_advance: string = "";
  infocompany_title: string = "";

  images: string[] = [];

  about_text: string = undefined;

  private loading: Loading;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private translate: TranslateService,
    private iab: InAppBrowser,
    private api: ApiProvider) {

    let path = 'assets/imgs/about/'
    this.images = ['sop2.jpg','sop1.jpg','sop3.jpg','sop4.jpg']
    this.images = this.images.map(element => path + element)
    
    this.loadAbout();
  }

  loadAbout() {
    this.presentLoadingDefault()
    this.api.aboutGet().subscribe(res => {
      if (res.status == 200) {
        this.about_text = res.body[0].body;
        console.log('text',this.about_text)
      }
      this.dismissLoading();
    }, error => {
      this.dismissLoading();
    });
  }

  ionViewDidLoad() { }


  open(url) {
    this.iab.create(url, "_system");
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: this.i18n('loading')
    });

    this.loading.present();
  }

  private dismissLoading() {
    setTimeout(() => {
      if (this.loading != undefined) {
        this.loading.dismissAll();
      }
    }, 2000);
  }

  private i18n(key:string): string {
    return this.translate.instant(key)
  }

}
