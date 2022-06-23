import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';
const HOST: string = "https://appacustica.soprema.es/";
@Injectable()
export class DocumentationProvider {

  document: any;
  constructor(public http: HttpClient, private api: ApiProvider) {
  }

  fillDocumentation() {
    let document: any = [];
    console.log('docu')
    this.api.documentGet().subscribe(res => {
      console.log(res);
      if (res.status == 200) {
        if (res.body != undefined) {
          this.document = res.body;
          for (let i = 0; i < this.document.length; i++) {
            let obj = this.document[i];
            if (obj.field_document_img.includes('.jpg') || obj.field_document_img.includes('.jpeg') || obj.field_document_img.includes('.png')) {
              obj.field_document_img = HOST + obj.field_document_img;
            } else {
              obj.field_document_img = "../../assets/imgs/default-placeholder-300x300.png"
            }

            obj.field_document_file = HOST + obj.field_document_file;
            document.push(obj);
          }
        }
      }

    });
    return document;

  }
}
export class Documentation {

  private title: string;
  private img: string;
  private link: string;

  constructor(title, img, link) {
    this.title = title;
    this.img = img;
    this.link = link;
  }

}