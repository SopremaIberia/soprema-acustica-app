import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeCA from '@angular/common/locales/ca';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CatalogueSelectionPage } from '../pages/catalogue-selection/catalogue-selection';
import { CataloguePage } from '../pages/catalogue/catalogue';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { ContentCategoriesPage } from '../pages/content-categories/content-categories';
import { DocumentationPage } from '../pages/documentation/documentation';
import { HomePage } from '../pages/home/home';
import { InfoCategoryPage } from '../pages/infocategory/infocategory';
import { InfocompanyPage } from '../pages/infocompany/infocompany';
import { InfoNotificationsPage } from '../pages/infonotifications/infonotifications';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProductPage } from '../pages/product/product';
import { ProductRangePage } from '../pages/productrange/productrange';
import { RegisterPage } from '../pages/register/register';
import { ResetPassPage } from '../pages/resetpass/resetpass';
import { SuggestionsPage } from '../pages/suggestions/suggestions';
import { ApiProvider } from '../providers/api/api';
import { ConfigurationProvider } from '../providers/configuration/configuration';
import { DocumentationProvider } from '../providers/documentation/documentation';
import { ProductrangeProvider } from '../providers/productrange/productrange';
import { CatalogueProvider } from '../providers/prov-catalogue/prov-catalogue';
import { ProvNotificationsProvider } from '../providers/prov-notifications/prov-notifications';
import { UsersProvider } from '../providers/users/users';
import { MyApp } from './app.component';
import { AppConfig } from './config';

const APP_CONFIG: AppConfig = {
  ApiEndpoint: "https://appacustica.soprema.es/"
}
registerLocaleData(localeCA);
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    CataloguePage,
    SuggestionsPage,
    NotificationsPage,
    CatalogueSelectionPage,
    InfoCategoryPage,
    ContentCategoriesPage,
    InfoNotificationsPage,
    ConfigurationPage,
    ProductRangePage,
    ProductPage,
    DocumentationPage,
    InfocompanyPage,
    ResetPassPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
    }),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicImageViewerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CataloguePage,
    SuggestionsPage,
    NotificationsPage,
    CatalogueSelectionPage,
    InfoCategoryPage,
    ContentCategoriesPage,
    InfoNotificationsPage,
    ConfigurationPage,
    ProductRangePage,
    ProductPage,
    DocumentationPage,
    InfocompanyPage,
    ResetPassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: AppConfig, useValue: APP_CONFIG },
    InAppBrowser,
    CatalogueProvider,
    ProvNotificationsProvider,
    ProductrangeProvider,
    SocialSharing,
    UsersProvider,
    ConfigurationProvider,
    DocumentationProvider,
    ApiProvider,

  ]
})
export class AppModule { }
