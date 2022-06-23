import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';


@Injectable()
export class ProvNotificationsProvider {

  private NOTIFICATIONS_KEY = "notifications_readed"

  notificationsReaded: Map<number, boolean> = new Map();
  notifications: any[] = []

  constructor(public http: HttpClient,
    private api: ApiProvider,
    private storage: Storage) {

  }

  cachedNotifications(): any[] {
    return this.notifications;  
  }

  cacheLoaded() {
    return this.notifications != undefined && this.notifications.length > 0;
  }

  hasNotifications(): boolean {

    if (this.notifications == undefined) return false;
    return this.notifications.length > 0;
  }

  fetchNotifications(last?: number): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.api.notificationsGet(0).subscribe(res => {
        let notifications = res.body;
        this.notifications = notifications;
        resolve(notifications)
      }), error => {
        reject(undefined)
      };
    })
  }

  checkReaded(id: number) {
    if (this.notificationsReaded == undefined) {
      return false;
    } else {
      return this.notificationsReaded.get(id);
    }
  }

  markNotificationAsReaded(notification) {
    this.notificationsReaded.set(notification.nid, true)
    let readed = JSON.stringify(Array.from(this.notificationsReaded.entries()));
    console.log('readed', readed)
    this.storage.set(this.NOTIFICATIONS_KEY, readed);
  }

  async loadNotificationsReadedFromPersistence(): Promise<any> {
    console.log('from loadNotificationsReadedFromPersistence')
    return new Promise((resolve, reject) => {
      this.storage.get(this.NOTIFICATIONS_KEY).then((val) => {
        if (val == undefined || val == '' || val == null) {
          this.notificationsReaded = new Map()
        } else {
          this.notificationsReaded = new Map(JSON.parse(val));
          console.log('notifications readed loaded', this.notificationsReaded)
        }
        resolve(this.notificationsReaded)
      }, error => {
        this.notificationsReaded = new Map()
        reject()
      });
    })
  }

}
export class Notification {

  private title: string;
  private id: number;
  private icon: string;
  public infonot: any;

  constructor(title, id, icon) {
    this.title = title;
    this.id = id;
    this.icon = icon;
  }
}