import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { TranslateService } from "@ngx-translate/core";
import { Events, Nav, Platform } from "ionic-angular";
import { CatalogueSelectionPage } from "../pages/catalogue-selection/catalogue-selection";
import { CataloguePage } from "../pages/catalogue/catalogue";
import { DocumentationPage } from "../pages/documentation/documentation";
import { InfocompanyPage } from "../pages/infocompany/infocompany";
import { NotificationsPage } from "../pages/notifications/notifications";
import { ProductRangePage } from "../pages/productrange/productrange";
import { SuggestionsPage } from "../pages/suggestions/suggestions";
import { ApiProvider } from "../providers/api/api";
import { ConfigurationProvider } from "../providers/configuration/configuration";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: CataloguePage;
  content: any = [];

  pages: Array<{
    title: string;
    icon: string;
    component: any;
    submenu: any[];
    id: number;
  }>;
  page: any[] = [];

  image_menu = "";

  constructor(
    private api: ApiProvider,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private config: ConfigurationProvider,
    private events: Events,
    private translate: TranslateService
  ) {
    if (this.platform.is("ios")) {
      this.pages = [
        {
          title: "Soluciones de aislamiento",
          icon: "assets/icon/solucionesacusticas.png",
          component: CataloguePage,
          submenu: [],
          id: 1,
        },
        {
          title: "Gama de productos",
          icon: "assets/icon/gamadeproductos.png",
          component: ProductRangePage,
          submenu: [],
          id: 2,
        },
        {
          title: "Documentación",
          icon: "assets/icon/documentacion.png",
          component: DocumentationPage,
          submenu: [],
          id: 3,
        },
        {
          title: "Notificaciones",
          icon: "assets/imgs/notificacion.png",
          component: NotificationsPage,
          submenu: [],
          id: 4,
        },
        {
          title: "Contacto",
          icon: "assets/icon/contacto.png",
          component: SuggestionsPage,
          submenu: [],
          id: 6,
        },
      ];
    } else {
      this.pages = [
        {
          title: "Soluciones de aislamiento",
          icon: "assets/icon/solucionesacusticas.png",
          component: CataloguePage,
          submenu: [],
          id: 1,
        },
        {
          title: "Gama de productos",
          icon: "assets/icon/gamadeproductos.png",
          component: ProductRangePage,
          submenu: [],
          id: 2,
        },
        {
          title: "Documentación",
          icon: "assets/icon/documentacion.png",
          component: DocumentationPage,
          submenu: [],
          id: 3,
        },
        {
          title: "Notificaciones",
          icon: "assets/imgs/notificacion.png",
          component: NotificationsPage,
          submenu: [],
          id: 4,
        },
        {
          title: "Quienes somos",
          icon: "assets/icon/quienessomos.png",
          component: InfocompanyPage,
          submenu: [],
          id: 5,
        },
        {
          title: "Contacto",
          icon: "assets/icon/contacto.png",
          component: SuggestionsPage,
          submenu: [],
          id: 6,
        },
      ];
    }

    this.initializeApp();
    this.events.subscribe("channel-submenu", (data) => {
      this.pages[0].submenu = data;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.config.initLanguage();
      this.translate.onLangChange.subscribe((lang) => {
        this.nav.setRoot(CataloguePage);
      });

      if (this.platform.is("cordova")) {
        this.splashScreen.show();
        this.loadAbout();
        (<any>window).FirebasePlugin.getToken((token) => {});
        setTimeout(() => {
          this.splashScreen.hide();
        }, 500);
      }
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  toSubmenu(p) {
    this.api.catalogueGet().subscribe((res) => {
      if (res.status == 200) {
        this.content = res.body;
        let item: any = [];
        item = this.content.isolation_types;
        for (let i = 0; i < item.length; i++) {
          let items = item[i];
          if (p.tid == items.tid) {
            let data = {
              item: items,
              content: this.content,
            };
            this.nav.setRoot(CatalogueSelectionPage, data);
          }
        }
      }
    });
  }

  loadAbout() {
    this.api.aboutGet().subscribe(
      (res) => {
        if (res.status == 200) {
          this.image_menu = res.body[0].field_logo;
        }
      },
      (error) => {}
    );
  }
}
