import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogueProvider {

  content: any[] = [
    { title: "Tipo de edificio", img: "assets/imgs/image1.jpg", id: 1 },
    { title: " Elemento constructivo", img: "assets/imgs/image2.jpg", id: 2 }
  ];

  constructor(public http: HttpClient) { }

  getContentCatalogue() {
    return this.content;
  }

  getContentCatalogueSection() {
    let content: any[] = [
      new CatalogueSection(1, "Viviendas", "assets/imgs/vivienda.jpg", 1),
      new CatalogueSection(2, "Hoteles", "assets/imgs/hotel.jpg", 1),
      new CatalogueSection(3, "Aulas y oficinas", "assets/imgs/oficina.jpg", 1),
      new CatalogueSection(4, "Locales sin música", "assets/imgs/tienda.jpg", 1),
      new CatalogueSection(5, "Locales con música", "assets/imgs/tiendamusica.jpg", 1),
      new CatalogueSection(6, "Pubs y discotecas", "assets/imgs/pub.jpg", 1),
      new CatalogueSection(7, "Cubierta", "assets/imgs/cubiertas.jpg", 2),
      new CatalogueSection(8, "Techo", "assets/imgs/techo.jpg", 2),
      new CatalogueSection(9, "Suelos", "assets/imgs/suelo.jpg", 2),
      new CatalogueSection(10, "Particiones verticales", "assets/imgs/particion.jpg", 2),
      new CatalogueSection(11, "Bajantes", "assets/imgs/bajante.jpg", 2)
    ];
    let temp = [];

    for (let i = 0; i < content.length; i++) {
      let con = content[i];
      if (con.idcat == 1) {
        let cinfo1 = new InfoCategory(1, "TECSOUND® 2 FT 80 / FIJACIÓN PH-T", "PM-2", 1);
        cinfo1.content = new ContentCategory(1, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo1.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo1);
        let cinfo2 = new InfoCategory(2, "INSOPLAST 6 / INSOPLAST AA6 TECSOUND® S 50 BAND 50", "PM(b)-5", 1);
        cinfo2.content = new ContentCategory(2, "PM(b)-5", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo2.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo2);
        let cinfo3 = new InfoCategory(3, "TEXSIMPACT / BANDA TEXFON", "S-1", 2);
        cinfo3.content = new ContentCategory(3, "S-1", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo3.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo3);
        let cinfo4 = new InfoCategory(4, "TEXTFON / BANDA TEXFON", "S-6", 2);
        cinfo4.content = new ContentCategory(4, "S-6", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo4.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo4);
        let cinfo5 = new InfoCategory(5, "TECSOUND® FT 55AL", "BJ-1", 3);
        cinfo5.content = new ContentCategory(5, "BJ-1", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo5.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo5);
      }
      if (con.idcat == 2) {
        let cinfo1 = new InfoCategory(6, "Lw 21 dB", "Suelo S-1", 4);
        cinfo1.content = new ContentCategory(6, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo1.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo1);
        let cinfo2 = new InfoCategory(7, "Lw 22 dB", "Suelo S-6", 4);
        cinfo2.content = new ContentCategory(7, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo2.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo2);
        let cinfo3 = new InfoCategory(8, "Lw 22 dB", "Suelo S-2", 4);
        cinfo3.content = new ContentCategory(8, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo3.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo3);
        let cinfo4 = new InfoCategory(9, "Lw 26 dB", "Suelo S-5", 4);
        cinfo4.content = new ContentCategory(9, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo4.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo4);
        let cinfo5 = new InfoCategory(10, "Lw 21 dB", "Suelo S-4", 5);
        cinfo5.content = new ContentCategory(10, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo5.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo5);
        let cinfo6 = new InfoCategory(11, "Lw 21 dB", "Suelo S-3", 5);
        cinfo6.content = new ContentCategory(11, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
        cinfo6.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
        con.categories.push(cinfo6);
      }
      temp.push(con);
    }

    return temp;
  }

  getCategoriesInfo(idcat) {
    let categories;
    if (idcat == 1) {

      categories = [
        {
          id: 1, title: "Medianera"
        },
        {
          id: 2, title: "Suelo"
        },
        {
          id: 3, title: "Bajantes"
        },


      ];
    } else if (idcat == 2) {

      categories = [
        {
          id: 4, title: "Chapa de mortero"
        },
        {
          id: 5, title: "Parquet, tarima"
        },

      ];
    }
    return categories;
  }
}
export class CatalogueSection {
  private title: string;
  private img: string;
  private id: number;
  private idcat: number;
  categories: InfoCategory[];

  constructor(id, title, img, idcat) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.idcat = idcat;
    this.categories = [];
  }

}
export class InfoCategory {
  private id: number;
  private title: string;
  private prefix: string;
  private category: number;
  content: ContentCategory;
  constructor(id, title, prefix, category) {
    this.id = id;
    this.title = title;
    this.prefix = prefix;
    this.category = category;
  }
}
export class ContentCategory {
  private id: number;
  private title: string;
  private description: string;
  private info: string;
  private unitdesc: string;
  private unitinfo: string;
  private img: string;
  private titletecnic: string;
  private imgtecnic: string;
  private subtitle: string;
  private imagetecnic: string;
  private advantage: string;
  public advantagearray: string[];
  constructor(id, title, description, info, unit, unitinfo, img, title2, img2, subtitle, image, adv) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.info = info;
    this.unitdesc = unit;
    this.unitinfo = unitinfo;
    this.img = img;
    this.titletecnic = title2;
    this.imgtecnic = img2;
    this.subtitle = subtitle;
    this.imagetecnic = image;
    this.advantage = adv;
  }
}
