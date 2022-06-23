import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ConfigurationPage } from '../configuration/configuration';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-productrange',
  templateUrl: 'productrange.html',
})

export class ProductRangePage {

  range: any = [];
  productrange_title: String = "";
  MAXLENGTH: number = 22;

  private loading: Loading;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private translate: TranslateService,
    private api: ApiProvider) {

    this.presentLoadingDefault();
    this.api.productRangeGet().subscribe(res => {
      if (res.status == 200) {
        this.range = res.body;
      }
    });
    this.dismissLoading();
  }

  ionViewDidLoad() { }

  toConfiguration() {
    this.navCtrl.push(ConfigurationPage);
  }

  pushToInfo(item) {
    let data = {
      item: item
    }
    this.navCtrl.push(ProductPage, data);
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: this.i18n('loading')
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
