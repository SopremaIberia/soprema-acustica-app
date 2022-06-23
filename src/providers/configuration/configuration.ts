import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class ConfigurationProvider {
  language: Language;

  constructor(
    public http: HttpClient,
    private storage: Storage,
    private translate: TranslateService
  ) {}

  initLanguage() {
    this.translate.setDefaultLang("es");
    this.translate.use("es");
    this.storage.get("lang").then(
      (data) => {
        if (data == "es" || data === undefined) {
          this.translate.setDefaultLang("es");
          this.translate.use("es");
          return new Language(1, "Español", true);
        } else {
          /*this.translate.setDefaultLang("pt");
          this.translate.use("pt");
          return new Language(2, "Portugues", false);*/
        }
      },
      (error) => {
        this.translate.setDefaultLang("es");
        this.translate.use("es");
        this.storage.set("lang", "es");
        return new Language(1, "Español", true);
      }
    );
  }

  currentLang() {
    if (this.language == undefined) {
      this.storage.set("lang", "es");
    }
    return this.language;
  }

  setLanguage(language) {
    this.language = language;
    let lang = "es";
    if (language.id == 1) {
      this.translate.setDefaultLang("es");
      this.translate.use("es");
    } else {
      lang = "pt";
      this.translate.setDefaultLang("pt");
      this.translate.use("pt");
    }

    this.storage.set("lang", lang).then(
      (data) => {},
      (error) => {}
    );
  }

  fillLanguage() {
    let language: any[] = [];
    let lan1 = new Language(1, "Español", true);
    language.push(lan1);

    //Portugués desactivat
    //let lan2 = new Language(2, "Portugues", false);
    //language.push(lan2);
    return language;
  }

  fillProvince() {
    let province: any[] = [
      "Lleida",
      "Barcelona",
      "Tarragona",
      "Girona",
      "Huesca",
      "Zaragoza",
    ];
    return province;
  }
}
export class Language {
  private id: number;
  private language: string;
  private active: boolean;
  constructor(id, language, active) {
    this.id = id;
    this.language = language;
    this.active = active;
  }

  enable() {
    this.active = true;
  }

  disable() {
    this.active = false;
  }

  getIcon() {
    if (this.active) {
      return "radio-button-on";
    } else {
      return "radio-button-off";
    }
  }

  toJson() {
    let data = {
      id: this.id,
      language: this.language,
      active: this.active,
    };
    return data;
  }

  loadFromJSON(data) {
    this.id = data["id"];
    this.language = data["language"];
    this.active = data["active"];

    return [this.id, this.language, this.active];
  }
}
