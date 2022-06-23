import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  Platform
} from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { CatalogueProvider } from "../../providers/prov-catalogue/prov-catalogue";
import { SocialSharing } from "@ionic-native/social-sharing";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "page-content-categories",
  templateUrl: "content-categories.html"
})
export class ContentCategoriesPage {
  id: any;
  title: string;
  content: any;
  parentId: number;
  options: boolean = true;
  details: string = "general";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
    private platform: Platform,
    public cat: CatalogueProvider,
    private translate: TranslateService,
    public alertCtrl: AlertController,
    private socialSharing: SocialSharing
  ) {
    this.fetchParameters();
  }

  ionViewDidLoad() {}

  fetchParameters() {
    this.content = this.navParams.get("item");
    this.id = this.navParams.get("id");
    this.title = this.navParams.get("prefix");
    this.parentId = this.navParams.get("category");
    console.log("parentid", this.parentId);
    console.log("content-categories fetchParameters", this.content);
  }

  showAlert(subtitle) {
    let alert = this.alertCtrl.create({
      title: this.i18n("title"),
      subTitle: subtitle,
      buttons: [this.i18n("accept")]
    });
    alert.present();
  }

  shareDocument(item) {
    if (item) {
      console.log(item);
      let file = item.field_as_data_sheet;
      if (file != undefined && file != null) {
        //share(message?: string, subject?: string, file?: string | string[], url?: string): Promise<any>;
        let body = item.body;
        body = body.replace(/<\/?[^>]+(>|$)/g, "");
        let title = item.title.replace(/<\/?[^>]+(>|$)/g, "");

        console.log("body", body);
        console.log("title", title);
        let message = item.title + "\n\n" + item.body;
        if (this.platform.is("android")) {
          let descarga =
            "Descarga la APP Android en https://play.google.com/store/apps/details?id=com.soprema.app";
          message = message + "\n\n\n" + descarga;
        }
        this.socialSharing
          .share(message, "Soprema " + title, file, file)
          .then(() => {})
          .catch(() => {});
      } else {
        this.showAlert("No hay ficha asociada.");
      }
    }
  }

  download(item) {
    
    if (item) {
      let x = item.field_as_data_sheet;
      if (x != undefined) {
             console.log(x);
        setTimeout(() => {
            window.open(x, "_system");
        }, 200);
      } else {
        this.showAlert("No hay ficha asociada.");
      }
    } else {
      this.showAlert("No se pudo recuperar la ficha.");
    }
  }

  private i18n(key: string): string {
    return this.translate.instant(key);
  }
}