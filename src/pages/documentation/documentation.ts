import { Component } from '@angular/core';
import { NavController, NavParams, Content, LoadingController, Loading, AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DocumentationProvider } from '../../providers/documentation/documentation';
import { ConfigurationPage } from '../configuration/configuration';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'page-documentation',
  templateUrl: 'documentation.html',
})
export class DocumentationPage {
  
  documentation_title: string = "";
  document: any = [];
  private loading: Loading;
  MAXLENGTH: number = 21;

  constructor(public navCtrl: NavController, 
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navParams: NavParams, 
    private iab: InAppBrowser, 
    private translate: TranslateService,
    private prov: DocumentationProvider) { 
    
    this.document = this.prov.fillDocumentation();
    this.presentLoadingDefault(); 
    this.dismissLoading();
  }


  ionViewDidLoad() { }

  download(item) {
    const browser = this.iab.create(item.field_document_file, "_system");
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content:  this.i18n('loading')
    });

    this.loading.present();
  }
  dismissLoading() {
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



