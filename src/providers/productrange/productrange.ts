import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductrangeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductrangeProvider {

  data:any = {}

  constructor(public http: HttpClient) {
    
  }


  getvaluesproduct() {
    /*let content: any[] = [];

    let c1 = new productrange("TEC SOUND®", "assets/imgs/colorfull.jpg");
    c1.info = new product("TEC SOUND®", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT.", "De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "Ventajas", "assets/imgs/4452138.jpeg", "assets/imgs/4452138.jpeg");
    c1.info.info = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tableros de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento, mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superficie irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrera de vapor", "Excelente resistencia al envejecimiento.", "imputrescible."];
    let c2 = new productrange("TEC SOUND® SY", "assets/imgs/aislamiento.jpg");
    c2.info = new product("TEC SOUND®", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT.", "De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "Ventajas", "assets/imgs/4452138.jpeg", "assets/imgs/4452138.jpeg");
    c2.info.info = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tableros de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento, mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superficie irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrera de vapor", "Excelente resistencia al envejecimiento.", "imputrescible."];
    let c3 = new productrange("TEC SOUND® FT", "assets/imgs/building.jpg");
    c3.info = new product("TEC SOUND®", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT.", "De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "Ventajas", "assets/imgs/4452138.jpeg", "assets/imgs/4452138.jpeg");
    c3.info.info = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tableros de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento, mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superficie irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrera de vapor", "Excelente resistencia al envejecimiento.", "imputrescible."];
    let c4 = new productrange("TEC SOUND® 2 FT", "assets/imgs/techo.jpg");
    c4.info = new product("TEC SOUND®", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT.", "De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "Ventajas", "assets/imgs/4452138.jpeg", "assets/imgs/4452138.jpeg");
    c4.info.info = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tableros de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento, mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superficie irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrera de vapor", "Excelente resistencia al envejecimiento.", "imputrescible."];
    let c5 = new productrange("TEC SOUND® FT 55 AL", "assets/imgs/colorfull.jpg");
    c5.info = new product("TEC SOUND®", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT.", "De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "Ventajas", "assets/imgs/4452138.jpeg", "assets/imgs/4452138.jpeg");
    c5.info.info = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tableros de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento, mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superficie irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrera de vapor", "Excelente resistencia al envejecimiento.", "imputrescible."];
    let c6 = new productrange("TEC SOUND® TUBE", "assets/imgs/aislamiento.jpg");
    c6.info = new product("TEC SOUND®", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT.", "De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "Ventajas", "assets/imgs/4452138.jpeg", "assets/imgs/4452138.jpeg");
    c6.info.info = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tableros de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento, mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superficie irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrera de vapor", "Excelente resistencia al envejecimiento.", "imputrescible."];
    let c7 = new productrange("TEC SOUND® S 50 BAND 50", "assets/imgs/building.jpg");
    c7.info = new product("TEC SOUND®", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT.", "De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "Ventajas", "assets/imgs/4452138.jpeg", "assets/imgs/4452138.jpeg");
    c7.info.info = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tableros de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento, mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superficie irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrera de vapor", "Excelente resistencia al envejecimiento.", "imputrescible."];
    content.push(c1, c2, c3, c4, c5, c6, c7);
    return content;*/
  }
}
export class productrange {
  private title: string;
  private img: string;
  info: product;
  constructor(title, img) {
    this.title = title;
    this.img = img;
  }
}
export class product {
  private title: string;
  private description: string;
  private desc: string;
  private text: string;
  private img: string;
  info: any[];
  private image: string;
  constructor(title, description, desc, text, img, image) {
    this.title = title;
    this.description = description;
    this.desc = desc;
    this.text = text;
    this.img = img;
    this.image = image;
    this.info = [];
  }
}
