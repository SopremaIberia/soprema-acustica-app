import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { InfoNotificationsPage } from '../infonotifications/infonotifications';
import { ConfigurationPage } from '../configuration/configuration';
import { ProvNotificationsProvider } from '../../providers/prov-notifications/prov-notifications';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  notifications: any = [];
  notification_title: string = "";
  private loading: Loading;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private translate: TranslateService,
    private loadingCtrl: LoadingController,
    private notificationsProvider: ProvNotificationsProvider) {
  }

  async ionViewDidLoad() {

    if (this.notificationsProvider.cacheLoaded() == false) {
      await this.notificationsProvider.loadNotificationsReadedFromPersistence()
    }
  }

  ionViewWillEnter() {

    if (this.notificationsProvider.hasNotifications()) {
      this.notifications = this.notificationsProvider.cachedNotifications();
    }

    this.presentLoadingDefault();
    this.notificationsProvider.fetchNotifications().then(res => {
      this.notifications = this.notificationsProvider.cachedNotifications();
      this.dismissLoading();
    }, error => {
      this.dismissLoading();
    });
  }

  checkReaded(id: number) {
    return this.notificationsProvider.checkReaded(id);
  }

  goDetail(notification) {

    this.notificationsProvider.markNotificationAsReaded(notification);
    this.navCtrl.push(InfoNotificationsPage, { 'item': notification });
  }

  toConfiguration() {

    this.navCtrl.push(ConfigurationPage);
  }

  presentLoadingDefault() {

    this.loading = this.loadingCtrl.create({
      content: this.i18n('loading')
    });

    this.loading.present();
  }

  dismissLoading() {

    if (this.loading != undefined) {
      this.loading.dismissAll();
    }
  }

  private i18n(key: string): string {
    return this.translate.instant(key)
  }
}