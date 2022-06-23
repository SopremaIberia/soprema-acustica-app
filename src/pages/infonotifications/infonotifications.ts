import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading  } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'page-infonotifications',
  templateUrl: 'infonotifications.html',
})

export class InfoNotificationsPage {

  id: any;
  title: any;
  notification: any;
  askfor: string = "";
  document: string = "";
  private loading: Loading;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
    private photoViewer: PhotoViewer) {
  
    this.notification = this.navParams.get('item');
  }

  ionViewDidLoad() { 

  }

  openIMG(img) {
   // this.photoViewer.show(img);
  }

  link(item) {
    if(item != undefined) {
      this.openBrowser(item.url)
    }
  }

  openBrowser(link) {
    this.iab.create(link, "_system");
  }

}
