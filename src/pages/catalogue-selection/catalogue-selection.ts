import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoCategoryPage } from '../infocategory/infocategory';
import { ConfigurationPage } from '../configuration/configuration';
import { CatalogueProvider } from '../../providers/prov-catalogue/prov-catalogue';
import { c } from '@angular/core/src/render3';


@Component({
  selector: 'page-catalogue-selection',
  templateUrl: 'catalogue-selection.html',
})
export class CatalogueSelectionPage {

  firstParent: number;
  id: number;
  idcat: number;
  title: string;
  content_catalogue_section: any = [];
  data: any = [];
  contentdata: any = [];
  contentcategory: any[] = [];
  selectbytype: string = "";
  catalogues: any[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public cat: CatalogueProvider) {

    this.fetchParameters();
    this.controlCategory();
  }

  ionViewDidLoad() {

   }

  controlCategory() {

    this.contentcategory = this.content_catalogue_section.filter(element => {
      return element.parent_id == this.id;
    })

  }

  pushToInfoCategory(item) {
    let data = {
      item: item,
      content: this.contentdata,
    }
    
    console.log('catalogue-selection',data);
    this.navCtrl.push(InfoCategoryPage, data);
  }

  fetchParameters() {
    this.data = this.navParams.get("item");
    this.contentdata = this.navParams.get("content");

    this.id = this.data.tid;
    this.title = this.data.name;
    this.content_catalogue_section = this.contentdata.isolation_subtypes;
  }
}
