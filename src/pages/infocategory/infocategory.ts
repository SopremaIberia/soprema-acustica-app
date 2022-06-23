import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentCategoriesPage } from '../content-categories/content-categories';
import { CatalogueProvider } from '../../providers/prov-catalogue/prov-catalogue';

@Component({
  selector: 'page-infocategory',
  templateUrl: 'infocategory.html',
})

export class InfoCategoryPage {

  info: any[] = [];
  id: number;
  content_info: any = [];
  content_cat: any = [];
  title: string;
  data: any = [];
  content: any = [];
  categories: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cat: CatalogueProvider) {

    this.fetchParameters();
    this.controlCategory();
    console.log('categories', this.categories)
  }

  controlCategory() {

    this.categories = this.content_cat.filter(element => {
      return element.parent_id == this.id;
    })
  }

  toInfoPage(item, cat) {
    let data = {
      item: item,
      category: cat
    }
    console.log('infocategory toInfoPage', data)

    this.navCtrl.push(ContentCategoriesPage, data);
  }

  fetchParameters() {
    this.data = this.navParams.get("item");
    this.id = this.data.tid;
    this.content = this.navParams.get("content");
    this.content_cat = this.content.isolation_subtypes_types; //mirar quins son suelon i enviarlos per compararlos
    this.content_info = this.content.isolation_products;
    this.title = this.data.name;
  }

}
