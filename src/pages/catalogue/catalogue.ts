import { Component } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { TranslateService } from "@ngx-translate/core";
import {
  AlertController,
  Events,
  Loading,
  LoadingController,
  NavController,
  NavParams,
  Platform
} from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";
import { CatalogueProvider } from "../../providers/prov-catalogue/prov-catalogue";
import { CatalogueSelectionPage } from "../catalogue-selection/catalogue-selection";
import { ConfigurationPage } from "../configuration/configuration";

@Component({
  selector: "page-catalogue",
  templateUrl: "catalogue.html",
})
export class CataloguePage {
  acustic_solutions: string = "";
  solutions: string = "";
  content: any = [];
  private loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public splashScreen: SplashScreen,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private events: Events,
    public cat: CatalogueProvider,
    private translate: TranslateService,
    private api: ApiProvider
  ) {
    this.platform.ready().then(() => {
      this.loadCatalogues();
    });
  }

  ionViewDidLoad() {
    this.getSubmenu();
  }

  loadCatalogues() {
    this.presentLoadingDefault();
    this.api.catalogueGet().subscribe(
      (res) => {
        if (res.status == 200) {
          this.content = res.body;
        }
        this.dismissLoading();
      },
      (error) => {
        this.dismissLoading();
      }
    );
  }

  toCatalogueSelection(item) {
    let data = {
      content: this.content,
      item: item,
    };
    this.getSubmenu();
    this.navCtrl.push(CatalogueSelectionPage, data);
  }

  getSubmenu() {
    this.api.catalogueGet().subscribe(
      (res) => {
        if (res.status == 200) {
          this.content = res.body;
          this.events.publish("channel-submenu", this.content.isolation_types);
        } else {
          let alert = this.alertCtrl.create({
            title: this.i18n("title"),
            subTitle: this.i18n("loading.fail"),
            buttons: [this.i18n("accept")],
          });
          alert.present();
        }
      },
      (error) => {}
    );
  }

  toConfiguration() {
    this.navCtrl.push(ConfigurationPage);
  }

  presentLoadingDefault() {
    this.translate.get("loading").subscribe((d) => {
      this.loading = this.loadingCtrl.create({
        content: d,
      });

      this.loading.present();
    });
  }

  dismissLoading() {
    setTimeout(() => {
      if (this.loading != undefined) {
        this.loading.dismissAll();
      }
    }, 2000);
  }

  private i18n(key: string): string {
    return this.translate.instant(key);
  }
}
