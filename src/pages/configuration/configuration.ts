import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ConfigurationProvider } from "../../providers/configuration/configuration";

@Component({
  selector: "page-configuration",
  templateUrl: "configuration.html",
})
export class ConfigurationPage {
  province: any;
  languages: any[] = [];
  selectedLanguage: any;
  keys: any[] = [];
  textname: string;
  textbusiness: string;
  telephone: number;
  oldpass: string;
  newpass: string;
  confirmnewpass: string;
  title_configuration: string = "";
  language_configuration: string = "";
  personal_data: string = "";
  placeholder_name_surname: string = "";
  placeholder_company: string = "";
  placeholder_phone: string = "";
  placeholder_province: string = "";
  save: string = "";
  change: string = "";
  modify_pass: string = "";
  placeholder_newpass: string = "";
  placeholder_oldpass: string = "";
  placeholder_repeatnewpass: string = "";
  legal_advise: string = "";
  text_legaladvise: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private configurationProvider: ConfigurationProvider
  ) {
    this.languages = configurationProvider.fillLanguage();
    this.keys = configurationProvider.fillProvince();
    this.selectedLanguage = this.configurationProvider.currentLang();
  }

  ionViewDidLoad() {}

  changeIconLanguage(item) {
    for (let i = 0; i < this.languages.length; i++) {
      let language = this.languages[i];
      if (language.id == item.id) {
        this.selectedLanguage = item;
        language.enable();
        let lang = this.selectedLanguage.toJson(this.selectedLanguage);
        this.configurationProvider.setLanguage(lang);
      } else {
        language.disable();
      }
    }
  }

  changeIconEnterPage() {
    return this.configurationProvider.currentLang();
  }

  inputData() {
    alert("Edición usuario deshabilitada temporalmente");
    /*let item = {
      name: this.textname,
      company: this.textbusiness,
      phone: this.telephone
    }
    if(this.newpass != undefined && this.newpass != '' && this.confirmnewpass != undefined && this.confirmnewpass) {
      item['current_pass'] = this.oldpass
      item['pass'] = this.newpass
    }
    this.usersProvider.updateUser(item).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });*/
  }

  clearInputPass() {
    this.oldpass = "";
    this.newpass = "";
    this.confirmnewpass = "";
  }
}
