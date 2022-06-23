import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, MenuController, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { UsersProvider } from '../../providers/users/users';
import { CataloguePage } from '../catalogue/catalogue';
import { RegisterPage } from '../register/register';
import { ResetPassPage } from '../resetpass/resetpass';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: string = "";
  password: string = "";
  infouser: any[];
  language: string;
  res: any;
  title: string;
  email: string;
  resetpass: string = "";
  placeholder: string = "";
  placeholder_pass: string = "";
  placeholder_login: string = "";
  placeholder_register: string = "";

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.passwordType == 'text') {
      this.passwordType = 'password'
      this.passwordIcon = 'eye'
    } else {
      this.passwordType = 'text'
      this.passwordIcon = 'eye-off'
    }
  }

  constructor(public navCtrl: NavController,
    private translate: TranslateService,
    private menu: MenuController,
    public navParams: NavParams,
    public api: ApiProvider,
    public alertCtrl: AlertController,
    private splashScreen: SplashScreen,
    private users: UsersProvider,
    private storage: Storage) {
  }

  async ionViewDidLoad() {


    this.protectedAutologin();
  }

  private async protectedAutologin() {

    this.menu.enable(true);
    let login = await this.getFromStorage('user.login')
    let password = await this.getFromStorage('user.password')
    setTimeout(() => {
      this.splashScreen.hide();
    }, 1000);
    if (login != undefined && password != undefined && login != null && password != null) {
      this.user = login;
      this.password = password;
      let item = {
        user: this.user,
        password: this.password
      }
      this.users.checkUser(item).subscribe(res => {
        console.log(res.body)

        if (res.status == 200) {
          this.users.setUser(res.body);
          this.menu.enable(true);
          this.navCtrl.setRoot(CataloguePage);
        }
      })
    }

  }

  private async getFromStorage(key) {
    return await this.storage.get(key);
  }

  toRegister() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  toResetPass() {
    this.navCtrl.push(ResetPassPage)
  }

  processLogin() {
    if (this.user == '' || this.user == '') {
      let alert = this.alertCtrl.create({
        title: this.i18n('title'),
        subTitle: this.i18n('form.mandatory.fields'),
        buttons: [this.i18n('accept')]
      });
      alert.present();
    } else {

      let item = {
        user: this.user,
        password: this.password
      }
      this.users.checkUser(item).subscribe(res => {
        if (res.status == 200) {

          this.storage.set('user.login', this.user);
          this.storage.set('user.password', this.password);

          this.users.setUser(res.body);
          this.menu.enable(true);
          this.navCtrl.setRoot(CataloguePage);
        }
        else if (res.status == 400) {
          this.showAlert(this.i18n('form.mandatory.fields'))
        }
        else {
          this.showAlert(this.i18n('form.user.pass.invalid'))
        }
      }, error => {
        this.showAlert(this.i18n('form.login.invalid'))
      });
    }
  }

  showAlert(subtitle) {
    let alert = this.alertCtrl.create({
      title: this.i18n('title'),
      subTitle: subtitle,
      buttons: [this.i18n('accept')]
    });
    alert.present();
  }

  private i18n(key: string): string {
    return this.translate.instant(key)
  }
}
