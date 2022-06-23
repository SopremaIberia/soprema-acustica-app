webpackJsonp([0],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueSelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infocategory_infocategory__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prov_catalogue_prov_catalogue__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatalogueSelectionPage = /** @class */ (function () {
    function CatalogueSelectionPage(navCtrl, navParams, cat) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cat = cat;
        this.content_catalogue_section = [];
        this.data = [];
        this.contentdata = [];
        this.contentcategory = [];
        this.selectbytype = "";
        this.catalogues = [];
        this.fetchParameters();
        this.controlCategory();
    }
    CatalogueSelectionPage.prototype.ionViewDidLoad = function () {
    };
    CatalogueSelectionPage.prototype.controlCategory = function () {
        var _this = this;
        this.contentcategory = this.content_catalogue_section.filter(function (element) {
            return element.parent_id == _this.id;
        });
    };
    CatalogueSelectionPage.prototype.pushToInfoCategory = function (item) {
        var data = {
            item: item,
            content: this.contentdata,
        };
        console.log('catalogue-selection', data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__infocategory_infocategory__["a" /* InfoCategoryPage */], data);
    };
    CatalogueSelectionPage.prototype.fetchParameters = function () {
        this.data = this.navParams.get("item");
        this.contentdata = this.navParams.get("content");
        this.id = this.data.tid;
        this.title = this.data.name;
        this.content_catalogue_section = this.contentdata.isolation_subtypes;
    };
    CatalogueSelectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalogue-selection',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/catalogue-selection/catalogue-selection.html"*/'<ion-header>\n    <ion-navbar color="soprema">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{title}} </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-row>\n            <div class="container-catalogue col-app-50" *ngFor="let item of contentcategory;let i = index" (click)="pushToInfoCategory(item)" [ngClass]="{\'grid-margin\': i % 2 == 0}">\n                <img class="fulls" src="{{item.field_ast_image}}">\n                <div class="container-catalogue-header">\n                    <h4 text-center>{{item.name}}</h4>\n                </div>\n            </div>\n        </ion-row>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/catalogue-selection/catalogue-selection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_prov_catalogue_prov_catalogue__["a" /* CatalogueProvider */]])
    ], CatalogueSelectionPage);
    return CatalogueSelectionPage;
}());

//# sourceMappingURL=catalogue-selection.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CataloguePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_prov_catalogue_prov_catalogue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalogue_selection_catalogue_selection__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configuration_configuration__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CataloguePage = /** @class */ (function () {
    function CataloguePage(navCtrl, navParams, platform, splashScreen, loadingCtrl, alertCtrl, events, cat, translate, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.cat = cat;
        this.translate = translate;
        this.api = api;
        this.acustic_solutions = "";
        this.solutions = "";
        this.content = [];
        this.platform.ready().then(function () {
            _this.loadCatalogues();
        });
    }
    CataloguePage.prototype.ionViewDidLoad = function () {
        this.getSubmenu();
    };
    CataloguePage.prototype.loadCatalogues = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.api.catalogueGet().subscribe(function (res) {
            if (res.status == 200) {
                _this.content = res.body;
            }
            _this.dismissLoading();
        }, function (error) {
            _this.dismissLoading();
        });
    };
    CataloguePage.prototype.toCatalogueSelection = function (item) {
        var data = {
            content: this.content,
            item: item,
        };
        this.getSubmenu();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__catalogue_selection_catalogue_selection__["a" /* CatalogueSelectionPage */], data);
    };
    CataloguePage.prototype.getSubmenu = function () {
        var _this = this;
        this.api.catalogueGet().subscribe(function (res) {
            if (res.status == 200) {
                _this.content = res.body;
                _this.events.publish("channel-submenu", _this.content.isolation_types);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: _this.i18n("title"),
                    subTitle: _this.i18n("loading.fail"),
                    buttons: [_this.i18n("accept")],
                });
                alert_1.present();
            }
        }, function (error) { });
    };
    CataloguePage.prototype.toConfiguration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__configuration_configuration__["a" /* ConfigurationPage */]);
    };
    CataloguePage.prototype.presentLoadingDefault = function () {
        var _this = this;
        this.translate.get("loading").subscribe(function (d) {
            _this.loading = _this.loadingCtrl.create({
                content: d,
            });
            _this.loading.present();
        });
    };
    CataloguePage.prototype.dismissLoading = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.loading != undefined) {
                _this.loading.dismissAll();
            }
        }, 2000);
    };
    CataloguePage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    CataloguePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-catalogue",template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/catalogue/catalogue.html"*/'<ion-header>\n\n    <ion-navbar color="soprema">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{\'acustic_solutions\' | translate}} </ion-title>\n        <ion-buttons end><button ion-button clear (click)="toConfiguration()" showWhen="android">\n            <ion-icon name="more" ></ion-icon>\n        </button>\n    </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <div class="container-catalogue" *ngFor="let item of content.isolation_types" (click)="toCatalogueSelection(item)">\n            <img class="img-catalogue" src="{{item.field_ast_image}}" />\n            <div class="container-catalogue-header">\n                <h4 text-center>{{item.name}}</h4>\n            </div>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/catalogue/catalogue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_prov_catalogue_prov_catalogue__["a" /* CatalogueProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], CataloguePage);
    return CataloguePage;
}());

//# sourceMappingURL=catalogue.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_configuration_configuration__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HOST = 'https://appacustica.soprema.es/';
var Endpointregister = 'user/register?_format=json';
var Endpointlogin = "user/login?_format=json";
var Endpointdocument = 'rest_api/v1/documents?_format=json';
var EndpointNotification = 'rest_api/v1/notifications?_format=json';
var EndpointProductRange = 'rest_api/v1/products_range?_format=json';
var EndpointCatalogue = 'rest_api/v1/isolation_products?_format=json';
var ENPOINTRESTPASS = 'rest_api/v1/user_reset_password?_format=json';
var EndpointAbout = 'rest_api/v1/about_us?_format=json';
var HTTP_FAIL_MESSAGE = "REQUEST FAILED";
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, configprov) {
        this.http = http;
        this.configprov = configprov;
        this.language = "es";
        this.name = 'appacustica-soprema';
        this.pass = '-APP-SOPREMA-';
    }
    ApiProvider.prototype.loginPost = function (item) {
        this.name = item.user;
        this.pass = item.password;
        return this.http.post(HOST + Endpointlogin, { "name": this.name, "pass": this.pass }, {
            headers: {
                "Content-Type": "application/json"
            }, observe: 'response'
        });
    };
    ApiProvider.prototype.registerUser = function (item) {
        var body = {
            "name": { "value": item.mail },
            "mail": { "value": item.mail },
            "pass": { "value": item.pass },
            "field_user_fullname": { "value": item.name },
            "field_user_company": { "value": item.company },
            "field_user_phone": { "value": item.tlf }
        };
        return this.http.post(this.buildEndpoint(Endpointregister), body, {
            headers: {
                "Content-Type": "application/json"
            }, observe: 'response'
        });
    };
    ApiProvider.prototype.resetPassPost = function (email) {
        var body = { "email": email };
        console.log(body);
        return this.http.post(this.buildEndpoint(ENPOINTRESTPASS), body, {
            headers: {
                "Content-Type": "application/json"
            }, observe: 'response'
        });
    };
    ApiProvider.prototype.sendMessage = function (item) {
        var email = item.email;
        var message = item.message;
        var auth = btoa(this.name + ":" + this.pass);
        var host = HOST + 'rest_api/v1/fake_msg/?_format=json&message=' + message + '&email=' + email;
        var headers = {
            "Authorization": "Basic " + auth,
            "Content-Type": "application/json",
            "X-CSRF-Token": "a4VViMTy6JEWtj3_bo6IkSLVoGFPPS2LPah8vGSM-os"
        };
        return this.http.get(host, {
            headers: headers, observe: 'response'
        });
    };
    ApiProvider.prototype.updateUser = function (item, id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            var basicauth = btoa(_this.name + ":" + _this.pass);
            var host = HOST + 'user/' + id + '?_format=json';
            var body = {
                "field_user_fullname": [{ "value": item.name }],
                "field_user_company": [{ "value": item.company }],
                "field_user_phone": [{ "value": item.phone }]
            };
            if (item.pass != undefined && item.current_pass != undefined) {
                body['pass'] = [{ "existing": item.current_pass, "value": item.pass }];
            }
            var headers = {
                "Authorization": "Basic " + basicauth,
                "Content-Type": "application/json",
                "X-CSRF-Token": _this.csrf_token
            };
            return _this.http.patch(host, body, { headers: headers }).subscribe(observer);
        });
    };
    ApiProvider.prototype.documentGet = function () {
        return this.buildRequest(Endpointdocument);
    };
    ApiProvider.prototype.notificationsGet = function (last) {
        if (last != undefined) {
            var params = '&last=' + last;
            return this.buildRequest(EndpointNotification, params);
        }
        else {
            return this.buildRequest(EndpointNotification);
        }
    };
    ApiProvider.prototype.productRangeGet = function () {
        return this.buildRequest(EndpointProductRange);
    };
    ApiProvider.prototype.catalogueGet = function () {
        return this.buildRequest(EndpointCatalogue);
    };
    ApiProvider.prototype.aboutGet = function () {
        return this.buildRequest(EndpointAbout);
    };
    ApiProvider.prototype.userInfo = function (id) {
        var auth = btoa(this.name + ":" + this.pass);
        var host = HOST + '/user/' + id + '?_format=json';
        var headers = {
            "Authorization": "Basic " + auth,
            "Content-Type": "application/json",
            "X-CSRF-Token": "a4VViMTy6JEWtj3_bo6IkSLVoGFPPS2LPah8vGSM-os"
        };
        return this.http.get(host, {
            headers: headers, observe: 'response'
        });
    };
    ApiProvider.prototype.buildHeader = function (auth) {
        return {
            "Authorization": "Basic " + auth,
            "Content-Type": "application/json",
        };
    };
    ApiProvider.prototype.buildEndpoint = function (endpoint, params) {
        this.language = this.configprov.currentLang();
        if (params != undefined) {
            endpoint += params;
        }
        if (this.language != undefined && this.language.id == 2) {
            return HOST + 'pt-pt/' + endpoint;
        }
        return HOST + endpoint;
    };
    ApiProvider.prototype.buildRequest = function (endpoint, params) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (endpoint == undefined) {
                observer.error(HTTP_FAIL_MESSAGE);
            }
            if ((_this.name == undefined || _this.name == '') && (_this.pass == undefined || _this.pass == '')) {
                observer.error(HTTP_FAIL_MESSAGE);
            }
            var basicauth = btoa(_this.name + ":" + _this.pass);
            _this.http.get(_this.buildEndpoint(endpoint, params), {
                headers: _this.buildHeader(basicauth), observe: 'response'
            }).subscribe(observer);
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_configuration_configuration__["a" /* ConfigurationProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_categories_content_categories__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prov_catalogue_prov_catalogue__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoCategoryPage = /** @class */ (function () {
    function InfoCategoryPage(navCtrl, navParams, cat) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cat = cat;
        this.info = [];
        this.content_info = [];
        this.content_cat = [];
        this.data = [];
        this.content = [];
        this.categories = [];
        this.fetchParameters();
        this.controlCategory();
        console.log('categories', this.categories);
    }
    InfoCategoryPage.prototype.controlCategory = function () {
        var _this = this;
        this.categories = this.content_cat.filter(function (element) {
            return element.parent_id == _this.id;
        });
    };
    InfoCategoryPage.prototype.toInfoPage = function (item, cat) {
        var data = {
            item: item,
            category: cat
        };
        console.log('infocategory toInfoPage', data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__content_categories_content_categories__["a" /* ContentCategoriesPage */], data);
    };
    InfoCategoryPage.prototype.fetchParameters = function () {
        this.data = this.navParams.get("item");
        this.id = this.data.tid;
        this.content = this.navParams.get("content");
        this.content_cat = this.content.isolation_subtypes_types; //mirar quins son suelon i enviarlos per compararlos
        this.content_info = this.content.isolation_products;
        this.title = this.data.name;
    };
    InfoCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infocategory',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/infocategory/infocategory.html"*/'<ion-header>\n    <ion-navbar color="soprema">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{title}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div>\n        <ion-list>\n            <ion-item-group *ngFor="let cat of categories">\n                <ion-item-divider color="grey">\n                    <h4 class="subtitle">{{cat.name}}</h4>\n                </ion-item-divider>\n                <div lines *ngFor="let item of content_info">\n                    <div *ngFor="let items of item.field_as_decision_tree">\n                        <ion-item lines *ngIf="items.target_id == cat.tid" (click)="toInfoPage(item,cat)">\n                            <div class="text" text-wrap>\n                                <b>{{item.field_as_code}}</b> {{item.title}}\n                            </div>\n                        </ion-item>\n                    </div>\n                </div>\n            </ion-item-group>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/infocategory/infocategory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_prov_catalogue_prov_catalogue__["a" /* CatalogueProvider */]])
    ], InfoCategoryPage);
    return InfoCategoryPage;
}());

//# sourceMappingURL=infocategory.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prov_catalogue_prov_catalogue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContentCategoriesPage = /** @class */ (function () {
    function ContentCategoriesPage(navCtrl, navParams, iab, platform, cat, translate, alertCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.platform = platform;
        this.cat = cat;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.options = true;
        this.details = "general";
        this.fetchParameters();
    }
    ContentCategoriesPage.prototype.ionViewDidLoad = function () { };
    ContentCategoriesPage.prototype.fetchParameters = function () {
        this.content = this.navParams.get("item");
        this.id = this.navParams.get("id");
        this.title = this.navParams.get("prefix");
        this.parentId = this.navParams.get("category");
        console.log("parentid", this.parentId);
        console.log("content-categories fetchParameters", this.content);
    };
    ContentCategoriesPage.prototype.showAlert = function (subtitle) {
        var alert = this.alertCtrl.create({
            title: this.i18n("title"),
            subTitle: subtitle,
            buttons: [this.i18n("accept")]
        });
        alert.present();
    };
    ContentCategoriesPage.prototype.shareDocument = function (item) {
        if (item) {
            console.log(item);
            var file = item.field_as_data_sheet;
            if (file != undefined && file != null) {
                //share(message?: string, subject?: string, file?: string | string[], url?: string): Promise<any>;
                var body = item.body;
                body = body.replace(/<\/?[^>]+(>|$)/g, "");
                var title = item.title.replace(/<\/?[^>]+(>|$)/g, "");
                console.log("body", body);
                console.log("title", title);
                var message = item.title + "\n\n" + item.body;
                if (this.platform.is("android")) {
                    var descarga = "Descarga la APP Android en https://play.google.com/store/apps/details?id=com.soprema.app";
                    message = message + "\n\n\n" + descarga;
                }
                this.socialSharing
                    .share(message, "Soprema " + title, file, file)
                    .then(function () { })
                    .catch(function () { });
            }
            else {
                this.showAlert("No hay ficha asociada.");
            }
        }
    };
    ContentCategoriesPage.prototype.download = function (item) {
        if (item) {
            var x_1 = item.field_as_data_sheet;
            if (x_1 != undefined) {
                console.log(x_1);
                setTimeout(function () {
                    window.open(x_1, "_system");
                }, 200);
            }
            else {
                this.showAlert("No hay ficha asociada.");
            }
        }
        else {
            this.showAlert("No se pudo recuperar la ficha.");
        }
    };
    ContentCategoriesPage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    ContentCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-content-categories",template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/content-categories/content-categories.html"*/'<ion-header>\n    <ion-navbar color="soprema">\n        <ion-title>{{content.field_as_code}} {{content.title}} </ion-title>\n    </ion-navbar>\n    <ion-toolbar color="sopremalight">\n        <ion-segment [(ngModel)]="details" color="light">\n            <ion-segment-button value="general">\n                {{\'generalinfo\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="tecnic">\n                {{\'tecnicinfo\' | translate}}\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngSwitch]="details" has-bouncing="false">\n    <ion-list *ngSwitchCase="\'general\'" ngSelected="selected">\n        <div class="section-header">\n            <h4 class="title_text">{{content.field_as_code}} {{content.title}}</h4>\n        </div>\n        <div class="container-content" [innerHTML]="content.body">\n        </div>\n\n        <div>\n            <ion-grid no-padding>\n                <ion-row *ngIf="content.field_as_impact_noise_isolation">\n                    <ion-col class="section-header">\n                        <div style="width: 100%; text-align: center;">\n                            <span *ngIf="parentId.name != \'Suelo\' && parentId.parent_id != 7"><strong>R<sub>A</sub> =</strong></span>\n                            <span *ngIf="parentId.name == \'Suelo\' || parentId.parent_id == 7"><strong>ΔLw =</strong></span>\n\n                            {{content.field_as_impact_noise_isolation}} {{content.field_as_impact_noise_suffix}}\n                        </div>\n                    </ion-col>\n                    <ion-col class="section-header" *ngIf="content.field_as_thickness" style="margin-left: 5px;">\n                        <div style="width: 100%; text-align: center;">\n                            <strong>E =</strong> {{content.field_as_thickness}} mm\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf="content.field_as_air_noise_isolation">\n                    <ion-col class="section-header">\n                        <div style="width: 100%; text-align: center;">\n                            <strong>R<sub>A</sub> =</strong>\n                            {{content.field_as_air_noise_isolation}} {{content.field_as_air_noise_suffix}}\n                        </div>\n                    </ion-col>\n                    <ion-col class="section-header" *ngIf="content.field_as_thickness" style="margin-left: 5px;">\n                        <div style="width: 100%; text-align: center;">\n                            <strong>E =</strong> {{content.field_as_thickness}} mm\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n\n\n        <div class="img-center">\n            <ion-slides pager="true">\n                <ion-slide *ngFor="let image of content.field_as_img_layers">\n                    <img [src]="image.img_path" imageViewer>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="section-header">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <b>Capa</b>\n                    </ion-col>\n                    <ion-col>\n                        <b>Tipo</b>\n\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <ion-list>\n\n            <div *ngFor="let item of content.field_as_layers" class="list-elements">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <div>\n                                {{item.field_lp_name}}\n                            </div>\n                        </ion-col>\n                        <ion-col>\n                            <div>\n                                {{item.field_lp_product_solution}}\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-list>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'tecnic\'">\n        <div>\n            <div class="section-header">\n                <h5>{{\'CADdetails\' | translate}}</h5>\n            </div>\n            <div class="img-center">\n                <ion-slides pager="true">\n                    <ion-slide *ngFor="let image of content.field_as_cad_details">\n                        <img [src]="image.img_path" imageViewer>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n            <div class="section-header" *ngIf="parentId != undefined">\n                <h5 *ngIf="parentId.parent_id == 7; else makeElse">{{\'betterisolation\' | translate}}</h5>\n                <ng-template #makeElse>\n                    <h5 *ngIf="parentId.name != \'Suelo\'">{{\'betterisolationair\' | translate}}</h5>\n                    <h5 *ngIf="parentId.name == \'Suelo\'">{{\'betterisolation\' | translate}}</h5>\n                </ng-template>\n            </div>\n            <div class="img-center">\n                <ion-slides pager="true">\n                    <ion-slide *ngFor="let image of content.field_as_better_isolation">\n                        <img [src]="image.img_path" imageViewer>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n        </div>\n        <div class="section-header">\n            <h6>{{\'advantages\' | translate}}</h6>\n        </div>\n        <div class="container-content" [innerHTML]="content.field_as_advantages">\n        </div>\n    </ion-list>\n\n    <div class="cont_footer">\n        <button class="button-app-footer" (click)="shareDocument(content)" margin-left margin-bottom>\n            {{\'share\' | translate}}\n            <ion-icon name="share" margin-left>\n            </ion-icon>\n        </button>\n        <button class="button-app-footer" (click)="download(content)" margin-right margin-bottom>\n            {{\'data_sheet\' | translate}}\n            <ion-icon name="download" margin-left>\n            </ion-icon>\n        </button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/content-categories/content-categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_prov_catalogue_prov_catalogue__["a" /* CatalogueProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ContentCategoriesPage);
    return ContentCategoriesPage;
}());

//# sourceMappingURL=content-categories.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_documentation_documentation__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentationPage = /** @class */ (function () {
    function DocumentationPage(navCtrl, loadingCtrl, alertCtrl, navParams, iab, translate, prov) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.translate = translate;
        this.prov = prov;
        this.documentation_title = "";
        this.document = [];
        this.MAXLENGTH = 21;
        this.document = this.prov.fillDocumentation();
        this.presentLoadingDefault();
        this.dismissLoading();
    }
    DocumentationPage.prototype.ionViewDidLoad = function () { };
    DocumentationPage.prototype.download = function (item) {
        var browser = this.iab.create(item.field_document_file, "_system");
    };
    DocumentationPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: this.i18n('loading')
        });
        this.loading.present();
    };
    DocumentationPage.prototype.dismissLoading = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.loading != undefined) {
                _this.loading.dismissAll();
            }
        }, 2000);
    };
    DocumentationPage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    DocumentationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documentation',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/documentation/documentation.html"*/'<ion-header>\n    <ion-navbar color="soprema">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{\'documentation_title\' | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-row>\n            <div class="container-catalogue col-app-50" *ngFor="let item of document;let i = index" (click)="download(item)" [ngClass]="{\'grid-margin\': i % 2 == 0}">\n                <img src="{{item.field_document_img}}" class="fulls">\n                <div class="container-catalogue-header">\n                    <h4 text-center>{{item.title}}</h4>\n                </div>\n            </div>\n        </ion-row>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/documentation/documentation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_documentation_documentation__["a" /* DocumentationProvider */]])
    ], DocumentationPage);
    return DocumentationPage;
}());

//# sourceMappingURL=documentation.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationProvider; });
/* unused harmony export Documentation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HOST = "https://appacustica.soprema.es/";
var DocumentationProvider = /** @class */ (function () {
    function DocumentationProvider(http, api) {
        this.http = http;
        this.api = api;
    }
    DocumentationProvider.prototype.fillDocumentation = function () {
        var _this = this;
        var document = [];
        console.log('docu');
        this.api.documentGet().subscribe(function (res) {
            console.log(res);
            if (res.status == 200) {
                if (res.body != undefined) {
                    _this.document = res.body;
                    for (var i = 0; i < _this.document.length; i++) {
                        var obj = _this.document[i];
                        if (obj.field_document_img.includes('.jpg') || obj.field_document_img.includes('.jpeg') || obj.field_document_img.includes('.png')) {
                            obj.field_document_img = HOST + obj.field_document_img;
                        }
                        else {
                            obj.field_document_img = "../../assets/imgs/default-placeholder-300x300.png";
                        }
                        obj.field_document_file = HOST + obj.field_document_file;
                        document.push(obj);
                    }
                }
            }
        });
        return document;
    };
    DocumentationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], DocumentationProvider);
    return DocumentationProvider;
}());

var Documentation = /** @class */ (function () {
    function Documentation(title, img, link) {
        this.title = title;
        this.img = img;
        this.link = link;
    }
    return Documentation;
}());

//# sourceMappingURL=documentation.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfocompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InfocompanyPage = /** @class */ (function () {
    function InfocompanyPage(navCtrl, navParams, loadingCtrl, translate, iab, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.iab = iab;
        this.api = api;
        this.info_soprema_workers = "";
        this.info_soprema_countries = "";
        this.info_soprema_succes = "";
        this.info_soprema_definition = "";
        this.info_soprema_points = "";
        this.info_soprema_advance = "";
        this.infocompany_title = "";
        this.images = [];
        this.about_text = undefined;
        var path = 'assets/imgs/about/';
        this.images = ['sop2.jpg', 'sop1.jpg', 'sop3.jpg', 'sop4.jpg'];
        this.images = this.images.map(function (element) { return path + element; });
        this.loadAbout();
    }
    InfocompanyPage.prototype.loadAbout = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.api.aboutGet().subscribe(function (res) {
            if (res.status == 200) {
                _this.about_text = res.body[0].body;
                console.log('text', _this.about_text);
            }
            _this.dismissLoading();
        }, function (error) {
            _this.dismissLoading();
        });
    };
    InfocompanyPage.prototype.ionViewDidLoad = function () { };
    InfocompanyPage.prototype.open = function (url) {
        this.iab.create(url, "_system");
    };
    InfocompanyPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: this.i18n('loading')
        });
        this.loading.present();
    };
    InfocompanyPage.prototype.dismissLoading = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.loading != undefined) {
                _this.loading.dismissAll();
            }
        }, 2000);
    };
    InfocompanyPage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    InfocompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infocompany',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/infocompany/infocompany.html"*/'<ion-header>\n\n    <ion-navbar color="soprema">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'infocompany_title\' | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf="about_text != undefined">\n        <div [innerHTML]="about_text" class="container-content" showWhen="ios"></div>\n        <div class="container-content" showWhen="android">\n            <p>Soprema Iberia constituye como filial en España de la multinacional GRUPO SOPREMA.</p>\n            <p>Soprema Iberia es una empresa que fabrica y comercializa láminas asfálticas, membranas de impermeabilización sintética y liquida, productos para aislamiento acústico y para el\n                aislamiento término, geotextiles y drenaje.</p>\n            <p>Soprema Iberia está al servicio de los sectores de edificación, rehabilitación, distribución y obra civil, ofreciendio productos y soluciones de calidad para las diversas exigencias del\n                mercado.</p>\n        </div>\n        <div class="section-header">\n            <h4 text-center>Cifras del Grupo Soprema</h4>\n        </div>\n        <img src="assets/imgs/cifras.png" imageViewer>\n\n        <div class="section-header">\n            <h4 text-center>Fabricas Soprema Iberia</h4>\n        </div>\n        <div class="img-center">\n            <ion-slides pager="true">\n                <ion-slide *ngFor="let image of images">\n                    <img [src]="image" imageViewer>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <ion-grid>\n            <ion-row>\n                <ion-col text-center>\n                    <ion-icon name="phone-portrait" color="primary" (click)="open(\'https://www.soprema.es\')"></ion-icon>\n                </ion-col>\n                <ion-col text-center>\n                    <ion-icon name="logo-twitter" color="primary" (click)="open(\'https://twitter.com/SopremaIberia\')"></ion-icon>\n                </ion-col>\n                <ion-col text-center>\n                    <ion-icon name="logo-instagram" color="primary" (click)="open(\'https://www.instagram.com/sopremaiberia/\')"></ion-icon>\n                </ion-col>\n                <ion-col text-center>\n                    <ion-icon name="logo-youtube" color="primary" (click)="open(\'https://www.youtube.com/channel/UC3z_r1DlQRauLVNHNZ24Cig \')"></ion-icon>\n                </ion-col>\n                <ion-col text-center>\n                    <ion-icon name="logo-linkedin" color="primary" (click)="open(\'https://www.linkedin.com/company/sopremaiberia/ \')"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/infocompany/infocompany.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], InfocompanyPage);
    return InfocompanyPage;
}());

//# sourceMappingURL=infocompany.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoNotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer_ngx__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoNotificationsPage = /** @class */ (function () {
    function InfoNotificationsPage(navCtrl, navParams, iab, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.photoViewer = photoViewer;
        this.askfor = "";
        this.document = "";
        this.notification = this.navParams.get('item');
    }
    InfoNotificationsPage.prototype.ionViewDidLoad = function () {
    };
    InfoNotificationsPage.prototype.openIMG = function (img) {
        // this.photoViewer.show(img);
    };
    InfoNotificationsPage.prototype.link = function (item) {
        if (item != undefined) {
            this.openBrowser(item.url);
        }
    };
    InfoNotificationsPage.prototype.openBrowser = function (link) {
        this.iab.create(link, "_system");
    };
    InfoNotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infonotifications',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/infonotifications/infonotifications.html"*/'<ion-header>\n\n    <ion-navbar color="soprema">\n        <ion-title>{{\'detailnotification_title\' | translate}} </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-slides pager="true">\n        <ion-slide *ngFor="let image of notification.field_notification_images">\n            <img [src]="image.img_path" imageViewer>\n        </ion-slide>\n    </ion-slides>\n    <div class="section-header">\n        <h4 class="title_text">{{notification.title}}</h4>\n    </div>\n    <div class="container-content" [innerHTML]="notification.body">\n    </div>\n\n    <div margin>\n        <button *ngFor="let item of notification.field_notification_links" ion-button block class="button-app-footer" (click)="link(item)">\n        {{item.title}} <ion-icon name="link" margin-left></ion-icon>\n      </button>\n    </div>\n\n    <div margin>\n        <button *ngFor="let item of notification.field_notification_documents" ion-button block class="button-app-footer" (click)="link(item)">\n       {{item.file_name}} <ion-icon name="download" margin-left></ion-icon>\n      </button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/infonotifications/infonotifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer_ngx__["a" /* PhotoViewer */]])
    ], InfoNotificationsPage);
    return InfoNotificationsPage;
}());

//# sourceMappingURL=infonotifications.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_users__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__catalogue_catalogue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resetpass_resetpass__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, translate, menu, navParams, api, alertCtrl, splashScreen, users, storage) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.menu = menu;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.users = users;
        this.storage = storage;
        this.user = "";
        this.password = "";
        this.resetpass = "";
        this.placeholder = "";
        this.placeholder_pass = "";
        this.placeholder_login = "";
        this.placeholder_register = "";
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    LoginPage.prototype.hideShowPassword = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.passwordType == 'text') {
            this.passwordType = 'password';
            this.passwordIcon = 'eye';
        }
        else {
            this.passwordType = 'text';
            this.passwordIcon = 'eye-off';
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.protectedAutologin();
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.protectedAutologin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var login, password, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.menu.enable(true);
                        return [4 /*yield*/, this.getFromStorage('user.login')];
                    case 1:
                        login = _a.sent();
                        return [4 /*yield*/, this.getFromStorage('user.password')];
                    case 2:
                        password = _a.sent();
                        setTimeout(function () {
                            _this.splashScreen.hide();
                        }, 1000);
                        if (login != undefined && password != undefined && login != null && password != null) {
                            this.user = login;
                            this.password = password;
                            item = {
                                user: this.user,
                                password: this.password
                            };
                            this.users.checkUser(item).subscribe(function (res) {
                                console.log(res.body);
                                if (res.status == 200) {
                                    _this.users.setUser(res.body);
                                    _this.menu.enable(true);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__catalogue_catalogue__["a" /* CataloguePage */]);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getFromStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.toRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.toResetPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__resetpass_resetpass__["a" /* ResetPassPage */]);
    };
    LoginPage.prototype.processLogin = function () {
        var _this = this;
        if (this.user == '' || this.user == '') {
            var alert_1 = this.alertCtrl.create({
                title: this.i18n('title'),
                subTitle: this.i18n('form.mandatory.fields'),
                buttons: [this.i18n('accept')]
            });
            alert_1.present();
        }
        else {
            var item = {
                user: this.user,
                password: this.password
            };
            this.users.checkUser(item).subscribe(function (res) {
                if (res.status == 200) {
                    _this.storage.set('user.login', _this.user);
                    _this.storage.set('user.password', _this.password);
                    _this.users.setUser(res.body);
                    _this.menu.enable(true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__catalogue_catalogue__["a" /* CataloguePage */]);
                }
                else if (res.status == 400) {
                    _this.showAlert(_this.i18n('form.mandatory.fields'));
                }
                else {
                    _this.showAlert(_this.i18n('form.user.pass.invalid'));
                }
            }, function (error) {
                _this.showAlert(_this.i18n('form.login.invalid'));
            });
        }
    };
    LoginPage.prototype.showAlert = function (subtitle) {
        var alert = this.alertCtrl.create({
            title: this.i18n('title'),
            subTitle: subtitle,
            buttons: [this.i18n('accept')]
        });
        alert.present();
    };
    LoginPage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/login/login.html"*/'<ion-header>\n</ion-header>\n<ion-content padding>\n    <div class="img-center" margin-top style="margin-top:70px;">\n        <img src="assets/imgs/logo_login.png" />\n    </div>\n    <ion-list margin-top >\n        <ion-item class="bordered" margin-top  style="margin-top:30px;">\n            <ion-input type="text" [(ngModel)]="user" placeholder="{{\'email\' | translate }}"></ion-input>\n        </ion-item>\n        <ion-item class="bordered" margin-top>\n            <ion-input [type]="passwordType" [(ngModel)]="password" placeholder="{{\'placeholder_pass\' | translate}}">\n            </ion-input>\n            <ion-icon item-end [name]="passwordIcon" class="avoid-cursor" (click)=\'hideShowPassword($event)\'></ion-icon>\n        </ion-item>\n\n        <button margin-top ion-button block class="button-app-large"\n            (click)="processLogin()">{{\'placeholder_login\' | translate }}</button>\n        <p (click)="toResetPass()" class="link" text-end>{{\'resetpass\'|translate}}</p>\n        <button ion-button block class="button-app-large button-app-large-inverted"\n            (click)="toRegister()">{{\'placeholder_register\' | translate }}</button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_users_users__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersProvider = /** @class */ (function () {
    function UsersProvider(http, api) {
        this.http = http;
        this.api = api;
        this.infousers = [];
    }
    UsersProvider.prototype.checkUser = function (item) {
        return this.api.loginPost(item);
    };
    UsersProvider.prototype.userInfo = function () {
        if (this.user != undefined) {
            var id = this.user['current_user']['uid'];
            return this.api.userInfo(id);
        }
    };
    UsersProvider.prototype.updateUser = function (item) {
        if (this.user != undefined) {
            var id = this.user['current_user']['uid'];
            return this.api.updateUser(item, id);
        }
    };
    UsersProvider.prototype.setUser = function (user) {
        this.user = user;
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_configuration_configuration__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, prov, translate, iab, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.prov = prov;
        this.translate = translate;
        this.iab = iab;
        this.api = api;
        this.legal = false;
        this.password = "";
        this.repeatpass = "";
        this.company = "";
        this.tlf = "";
        this.email = "";
        this.name = "";
        this.register_title = "";
        this.register = "";
        this.keys = this.prov.fillProvince();
    }
    RegisterPage.prototype.ionViewDidLoad = function () { };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        if (this.validate()) {
            var item = {
                'pass': this.password,
                'name': this.name,
                'company': this.company,
                'tlf': this.tlf,
                'province': this.province,
                'mail': this.email
            };
            this.api.registerUser(item).subscribe(function (data) {
                if (data.status == 200) {
                    _this.showAlert(_this.i18n('register.ok'));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            }, function () {
                _this.showAlert(_this.i18n('register.fail'));
            });
        }
    };
    RegisterPage.prototype.validate = function () {
        if (!this.validField(this.email) || !this.validField(this.name)) {
            this.showAlert(this.i18n('form.mandatory.fields'));
            return false;
        }
        else if (this.password != this.repeatpass) {
            this.showAlert(this.i18n('password.not.equals'));
            return false;
        }
        else if (this.legal == false) {
            this.showAlert(this.i18n('legal.accept'));
            return false;
        }
        return true;
    };
    RegisterPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: this.i18n('title'),
            subTitle: msg,
            buttons: [this.i18n('accept')]
        });
        alert.present();
    };
    RegisterPage.prototype.validField = function (field) {
        if (field == undefined || field == '') {
            return false;
        }
        return true;
    };
    RegisterPage.prototype.openLegal = function () {
    };
    RegisterPage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/register/register.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'register\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="logo-title img-center">\n        <img src="assets/imgs/logo_login.png" />\n    </div>\n    <ion-list margin-top>\n        <ion-item class="bordered" margin-top>\n            <ion-input type="text" [(ngModel)]="email" placeholder="{{\'email\' | translate}}"></ion-input>\n        </ion-item>\n        <ion-item class="bordered" margin-top>\n            <ion-input type="password" [(ngModel)]="password" placeholder="{{\'placeholder_pass\' | translate}}">\n            </ion-input>\n        </ion-item>\n        <ion-item class="bordered" margin-top>\n            <ion-input type="password" [(ngModel)]="repeatpass"\n                placeholder="{{\'placeholder_repeatnewpass\' | translate}}">\n            </ion-input>\n        </ion-item>\n        <ion-item class="bordered" margin-top>\n            <ion-input type="text" [(ngModel)]="name" placeholder="{{\'placeholder_name_surname\' | translate}}">\n            </ion-input>\n        </ion-item>\n        <ion-item class="bordered" margin-top>\n            <ion-input type="text" [(ngModel)]="company" placeholder="{{\'placeholder_company\' | translate}}">\n            </ion-input>\n        </ion-item>\n        <ion-item class="bordered" margin-top>\n            <ion-input type="tel" [(ngModel)]="tlf" placeholder="{{\'placeholder_phone\' | translate}}"></ion-input>\n        </ion-item>\n        <ion-item (click)="openLegal()" margin-top>\n            <ion-label text-wrap>{{\'legal.accept\'|translate}}</ion-label>\n            <ion-checkbox slot="end" [(ngModel)]="legal" value="legal"></ion-checkbox>\n        </ion-item>\n        <!--<ion-item class="item-select">\n            <ion-select outline block [(ngModel)]="province" placeholder="{{\'placeholder_province\'|translate}}">\n                <ion-option *ngFor="let key of keys" value="{{key}}">{{key}}</ion-option>\n            </ion-select>\n        </ion-item> -->\n        <button ion-button block class="button-app-large" (click)="registerUser()">{{\'register\' | translate}}</button>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_configuration_configuration__["a" /* ConfigurationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPassPage = /** @class */ (function () {
    function ResetPassPage(navCtrl, alertCtrl, api, translate, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.translate = translate;
        this.navParams = navParams;
        this.resetpasstitle = "";
        this.textresetpass = "";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    ResetPassPage.prototype.ionViewDidLoad = function () {
    };
    ResetPassPage.prototype.resetPass = function () {
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (this.email == '' || this.email == undefined) {
            this.showAlert(this.i18n('form.mandatory.fields'));
        }
        else if (!regexp.test(this.email)) {
            this.showAlert(this.i18n('mail.wrong'));
        }
        else {
            this.api.resetPassPost(this.email).subscribe(function (data) {
                console.log(data);
            });
            this.email = '';
            this.showAlert(this.i18n('mail.sent.1') + this.email + this.i18n('mail.sent.2'));
        }
    };
    ResetPassPage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    ResetPassPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: this.i18n('title'),
            subTitle: message,
            buttons: [this.i18n('accept')]
        });
        alert.present();
    };
    ResetPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpass',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/resetpass/resetpass.html"*/'<ion-header>\n    <ion-navbar color="soprema">\n        <ion-title>{{\'resetpasstitle\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="container-content">\n        {{\'textresetpass\' | translate}}\n    </div>\n    <ion-input type="text" class="bordered" [(ngModel)]="email" placeholder="{{\'email\' | translate}}"></ion-input>\n    <button class="button-app-large" margin-top ion-button block (click)="resetPass()"> {{\'resetpasstitle\' | translate}} </button>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/resetpass/resetpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], ResetPassPage);
    return ResetPassPage;
}());

//# sourceMappingURL=resetpass.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infonotifications_infonotifications__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration_configuration__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prov_notifications_prov_notifications__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, translate, loadingCtrl, notificationsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.notificationsProvider = notificationsProvider;
        this.notifications = [];
        this.notification_title = "";
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.notificationsProvider.cacheLoaded() == false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.notificationsProvider.loadNotificationsReadedFromPersistence()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.notificationsProvider.hasNotifications()) {
            this.notifications = this.notificationsProvider.cachedNotifications();
        }
        this.presentLoadingDefault();
        this.notificationsProvider.fetchNotifications().then(function (res) {
            _this.notifications = _this.notificationsProvider.cachedNotifications();
            _this.dismissLoading();
        }, function (error) {
            _this.dismissLoading();
        });
    };
    NotificationsPage.prototype.checkReaded = function (id) {
        return this.notificationsProvider.checkReaded(id);
    };
    NotificationsPage.prototype.goDetail = function (notification) {
        this.notificationsProvider.markNotificationAsReaded(notification);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__infonotifications_infonotifications__["a" /* InfoNotificationsPage */], { 'item': notification });
    };
    NotificationsPage.prototype.toConfiguration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__configuration_configuration__["a" /* ConfigurationPage */]);
    };
    NotificationsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: this.i18n('loading')
        });
        this.loading.present();
    };
    NotificationsPage.prototype.dismissLoading = function () {
        if (this.loading != undefined) {
            this.loading.dismissAll();
        }
    };
    NotificationsPage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/notifications/notifications.html"*/'<ion-header>\n\n    <ion-navbar color="soprema">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'notification_title\' | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let notification of notifications" (click)="goDetail(notification)">\n            {{notification.title}}\n            <div item-end class="item-icons noti-icon-col">\n                <img src="assets/imgs/vist.png" *ngIf="!checkReaded(notification.nid)" />\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_prov_notifications_prov_notifications__["a" /* ProvNotificationsProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvNotificationsProvider; });
/* unused harmony export Notification */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProvNotificationsProvider = /** @class */ (function () {
    function ProvNotificationsProvider(http, api, storage) {
        this.http = http;
        this.api = api;
        this.storage = storage;
        this.NOTIFICATIONS_KEY = "notifications_readed";
        this.notificationsReaded = new Map();
        this.notifications = [];
    }
    ProvNotificationsProvider.prototype.cachedNotifications = function () {
        return this.notifications;
    };
    ProvNotificationsProvider.prototype.cacheLoaded = function () {
        return this.notifications != undefined && this.notifications.length > 0;
    };
    ProvNotificationsProvider.prototype.hasNotifications = function () {
        if (this.notifications == undefined)
            return false;
        return this.notifications.length > 0;
    };
    ProvNotificationsProvider.prototype.fetchNotifications = function (last) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.notificationsGet(0).subscribe(function (res) {
                var notifications = res.body;
                _this.notifications = notifications;
                resolve(notifications);
            }), function (error) {
                reject(undefined);
            };
        });
    };
    ProvNotificationsProvider.prototype.checkReaded = function (id) {
        if (this.notificationsReaded == undefined) {
            return false;
        }
        else {
            return this.notificationsReaded.get(id);
        }
    };
    ProvNotificationsProvider.prototype.markNotificationAsReaded = function (notification) {
        this.notificationsReaded.set(notification.nid, true);
        var readed = JSON.stringify(Array.from(this.notificationsReaded.entries()));
        console.log('readed', readed);
        this.storage.set(this.NOTIFICATIONS_KEY, readed);
    };
    ProvNotificationsProvider.prototype.loadNotificationsReadedFromPersistence = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('from loadNotificationsReadedFromPersistence');
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.storage.get(_this.NOTIFICATIONS_KEY).then(function (val) {
                            if (val == undefined || val == '' || val == null) {
                                _this.notificationsReaded = new Map();
                            }
                            else {
                                _this.notificationsReaded = new Map(JSON.parse(val));
                                console.log('notifications readed loaded', _this.notificationsReaded);
                            }
                            resolve(_this.notificationsReaded);
                        }, function (error) {
                            _this.notificationsReaded = new Map();
                            reject();
                        });
                    })];
            });
        });
    };
    ProvNotificationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ProvNotificationsProvider);
    return ProvNotificationsProvider;
}());

var Notification = /** @class */ (function () {
    function Notification(title, id, icon) {
        this.title = title;
        this.id = id;
        this.icon = icon;
    }
    return Notification;
}());

//# sourceMappingURL=prov-notifications.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_configuration__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer_ngx__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, navParams, iab, translate, alertCtrl, platform, socialSharing, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.photoViewer = photoViewer;
        this.advantages = "";
        this.applications = "";
        this.conditioning = "";
        this.data_sheet = "";
        this.share = "";
        this.field_pr_data_sheet = "";
        this.product = this.navParams.get("item");
    }
    ProductPage.prototype.ionViewDidLoad = function () { };
    ProductPage.prototype.toConfiguration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configuration_configuration__["a" /* ConfigurationPage */]);
    };
    ProductPage.prototype.openIMG = function (img) {
        this.photoViewer.show(img);
    };
    ProductPage.prototype.showAlert = function (subtitle) {
        var alert = this.alertCtrl.create({
            title: this.i18n('title'),
            subTitle: subtitle,
            buttons: [this.i18n('accept')]
        });
        alert.present();
    };
    ProductPage.prototype.shareDocument = function (item) {
        if (item) {
            console.log(item);
            var file = item.field_pr_data_sheet;
            if (file != undefined && file != null) {
                //share(message?: string, subject?: string, file?: string | string[], url?: string): Promise<any>;
                var body = item.body;
                body = body.replace(/<\/?[^>]+(>|$)/g, "");
                var title = item.title.replace(/<\/?[^>]+(>|$)/g, "");
                console.log('body', body);
                console.log('title', title);
                var message = item.title + "\n\n" + item.body;
                if (this.platform.is('android')) {
                    var descarga = "Descarga la APP Android en https://play.google.com/store/apps/details?id=com.soprema.app";
                    message = message + '\n\n\n' + descarga;
                }
                this.socialSharing.share(message, "Soprema " + title, file, file).then(function () {
                }).catch(function () {
                });
            }
            else {
                this.showAlert('No hay ficha asociada.');
            }
        }
    };
    ProductPage.prototype.download = function (item) {
        if (item) {
            if (item.field_pr_data_sheet != undefined) {
                var file = item.field_pr_data_sheet;
                this.iab.create(file, "_system");
            }
            else {
                this.showAlert('No hay ficha asociada.');
            }
        }
    };
    ProductPage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/product/product.html"*/'<ion-header>\n\n    <ion-navbar color="soprema">\n        <ion-title>{{product.title}} </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="img-center">\n        <ion-slides pager="true">\n            <ion-slide *ngFor="let image of product.field_pr_image">\n                <img [src]="image.img_path" imageViewer>\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <div class="section-header">\n        <h4 class="title_text">{{product.title}}</h4>\n    </div>\n    <div class="container-content" [innerHTML]="product.body"></div>\n    <div class="section-header">\n        <p>\n            <b>{{\'advantages\' | translate}}</b>\n        </p>\n    </div>\n    <div class="container-content">\n        <ul>\n            <li text-wrap *ngFor="let item of product.field_pr_advantages">\n                {{item.value}}\n            </li>\n        </ul>\n    </div>\n    <div class="section-header">\n        <p>\n            <b>{{\'applications\' | translate}}</b>\n        </p>\n    </div>\n    <div class="container-content">\n        <ul>\n            <li *ngFor="let item of product.field_pr_application">\n                {{item.value}}\n            </li>\n        </ul>\n    </div>\n    <div class="section-header">\n        <p><b>{{\'conditioning\' | translate}}</b></p>\n    </div>\n    <ion-list>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div>\n                        <strong>Modelo</strong>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <div>\n                        <strong>Rollo</strong>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <div>\n                        <strong>Palet</strong>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <div *ngFor="let item of product.field_pr_conditioning" class="list-elements">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <div>\n                            {{item.field_cp_model}}\n                        </div>\n                    </ion-col>\n                    <ion-col>\n                        <div>\n                            {{item.field_cp_roll}}\n                        </div>\n                    </ion-col>\n                    <ion-col>\n                        <div>\n                            {{item.field_cp_pallet}} m<sup>2</sup>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ion-list>\n\n    <div class="cont_footer">\n        <button ion-button class="button-app-footer" block (click)="shareDocument(product)">{{\'share\' | translate}}\n            <ion-icon name="share" margin-left></ion-icon>\n        </button>\n        <button ion-button class="button-app-footer" block (click)="download(product)">{{\'data_sheet\' | translate}}\n            <ion-icon name="download" margin-left></ion-icon>\n        </button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer_ngx__["a" /* PhotoViewer */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductRangePage = /** @class */ (function () {
    function ProductRangePage(navCtrl, navParams, loadingCtrl, translate, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.api = api;
        this.range = [];
        this.productrange_title = "";
        this.MAXLENGTH = 22;
        this.presentLoadingDefault();
        this.api.productRangeGet().subscribe(function (res) {
            if (res.status == 200) {
                _this.range = res.body;
            }
        });
        this.dismissLoading();
    }
    ProductRangePage.prototype.ionViewDidLoad = function () { };
    ProductRangePage.prototype.toConfiguration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["a" /* ConfigurationPage */]);
    };
    ProductRangePage.prototype.pushToInfo = function (item) {
        var data = {
            item: item
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], data);
    };
    ProductRangePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: this.i18n('loading')
        });
        this.loading.present();
    };
    ProductRangePage.prototype.dismissLoading = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.loading != undefined) {
                _this.loading.dismissAll();
            }
        }, 2000);
    };
    ProductRangePage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    ProductRangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productrange',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/productrange/productrange.html"*/'<ion-header>\n\n    <ion-navbar color="soprema">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{\'productrange_title\' | translate}} </ion-title>\n        <ion-buttons end><button ion-button clear (click)="toConfiguration()">\n        <ion-icon name="md-more"></ion-icon>\n      </button></ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-row>\n            <div class="container-catalogue col-app-50" *ngFor="let item of range;let i = index" (click)="pushToInfo(item)" [ngClass]="{\'grid-margin\': i % 2 == 0}">\n                <img *ngIf="item.field_pr_image.length > 0" class="fulls" src="{{item.field_pr_image[0].img_path}}">\n                <div class="container-catalogue-header">\n                    <h4 text-center>{{item.title}}</h4>\n                </div>\n            </div>\n        </ion-row>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/productrange/productrange.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], ProductRangePage);
    return ProductRangePage;
}());

//# sourceMappingURL=productrange.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_configuration__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuggestionsPage = /** @class */ (function () {
    function SuggestionsPage(navCtrl, navParams, alertCtrl, translate, loadingCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.content = [];
        this.suggestion = "";
        this.text_suggestion = "";
        this.placeholder_suggestion = "";
        this.send = "";
        this.legal = false;
    }
    SuggestionsPage.prototype.ionViewDidLoad = function () { };
    SuggestionsPage.prototype.clear = function () {
        this.legal = false;
        this.email = "";
        this.text = "";
    };
    SuggestionsPage.prototype.sendSuggestion = function () {
        var _this = this;
        if (this.text == '' || this.text == undefined) {
            this.showAlert(this.i18n('form.mandatory.fields'));
        }
        else if (this.legal == false) {
            this.showAlert(this.i18n('legal.accept'));
        }
        else {
            this.presentLoadingDefault();
            var item = {
                "email": this.email,
                "message": this.text
            };
            this.api.sendMessage(item).subscribe(function (data) {
                console.log(data);
                _this.clear();
                _this.dismissLoading();
                _this.showAlert('Mensaje enviado');
            }, function (error) {
                console.log(error);
            });
        }
    };
    SuggestionsPage.prototype.showAlert = function (subtitle) {
        var alert = this.alertCtrl.create({
            title: this.i18n('title'),
            subTitle: subtitle,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    SuggestionsPage.prototype.i18n = function (key) {
        return this.translate.instant(key);
    };
    SuggestionsPage.prototype.toConfiguration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configuration_configuration__["a" /* ConfigurationPage */]);
    };
    SuggestionsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: this.i18n('sending')
        });
        this.loading.present();
    };
    SuggestionsPage.prototype.dismissLoading = function () {
        if (this.loading != undefined) {
            this.loading.dismissAll();
        }
    };
    SuggestionsPage.prototype.openLegal = function () {
        window.open('https://www.soprema.com/en/privacy-policy', "_system");
    };
    SuggestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-suggestions',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/suggestions/suggestions.html"*/'<ion-header>\n\n  <ion-navbar color="soprema">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'suggestion\' | translate}} </ion-title>\n    <ion-buttons end showWhen="android">\n      <button ion-button clear (click)="toConfiguration()">\n        <ion-icon name="md-more"></ion-icon>\n      </button></ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container-content">{{\'text_suggestion\' | translate}}</div>\n  <ion-item class="bordered" margin-bottom>\n    <ion-input type="text" [(ngModel)]="email" placeholder="{{\'email\' | translate }}"></ion-input>\n  </ion-item>\n  <ion-textarea type="text" class="input_textarea" [(ngModel)]="text" placeholder="{{\'placeholder_suggestion\'| translate}}"></ion-textarea>\n  <button ion-button class="button-app-large" block (click)="sendSuggestion()">{{\'send\' | translate}}</button>\n  <ion-item margin-top>\n    <ion-label style="font-size:15px; !important" text-wrap>Acepto las condiciones legales.</ion-label>\n    <ion-checkbox slot="end" [(ngModel)]="legal" value="legal"></ion-checkbox>\n  </ion-item>\n  <ion-label style="font-size:15px;" (click)="openLegal()" text-wrap>Quiero leer las condiciones legales.</ion-label>\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/suggestions/suggestions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], SuggestionsPage);
    return SuggestionsPage;
}());

//# sourceMappingURL=suggestions.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(294);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_locales_ca__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer_ngx__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_img_viewer__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_catalogue_selection_catalogue_selection__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_catalogue_catalogue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_configuration_configuration__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_content_categories_content_categories__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_documentation_documentation__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_infocategory_infocategory__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_infocompany_infocompany__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_infonotifications_infonotifications__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_login_login__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_notifications_notifications__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_product_product__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_productrange_productrange__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_register_register__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_resetpass_resetpass__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_suggestions_suggestions__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_configuration_configuration__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_documentation_documentation__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_productrange_productrange__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_prov_catalogue_prov_catalogue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_prov_notifications_prov_notifications__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_users_users__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__config__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var APP_CONFIG = {
    ApiEndpoint: "https://appacustica.soprema.es/"
};
Object(__WEBPACK_IMPORTED_MODULE_0__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_2__angular_common_locales_ca__["a" /* default */]);
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_catalogue_catalogue__["a" /* CataloguePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_suggestions_suggestions__["a" /* SuggestionsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_catalogue_selection_catalogue_selection__["a" /* CatalogueSelectionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_infocategory_infocategory__["a" /* InfoCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_content_categories_content_categories__["a" /* ContentCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_infonotifications_infonotifications__["a" /* InfoNotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_configuration_configuration__["a" /* ConfigurationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_productrange_productrange__["a" /* ProductRangePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_documentation_documentation__["a" /* DocumentationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_infocompany_infocompany__["a" /* InfocompanyPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_resetpass_resetpass__["a" /* ResetPassPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_14_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_catalogue_catalogue__["a" /* CataloguePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_suggestions_suggestions__["a" /* SuggestionsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_catalogue_selection_catalogue_selection__["a" /* CatalogueSelectionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_infocategory_infocategory__["a" /* InfoCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_content_categories_content_categories__["a" /* ContentCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_infonotifications_infonotifications__["a" /* InfoNotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_configuration_configuration__["a" /* ConfigurationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_productrange_productrange__["a" /* ProductRangePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_documentation_documentation__["a" /* DocumentationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_infocompany_infocompany__["a" /* InfocompanyPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_resetpass_resetpass__["a" /* ResetPassPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer_ngx__["a" /* PhotoViewer */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["l" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_39__config__["a" /* AppConfig */], useValue: APP_CONFIG },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_35__providers_prov_catalogue_prov_catalogue__["a" /* CatalogueProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_prov_notifications_prov_notifications__["a" /* ProvNotificationsProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_productrange_productrange__["a" /* ProductrangeProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_37__providers_users_users__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_configuration_configuration__["a" /* ConfigurationProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_documentation_documentation__["a" /* DocumentationProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_api_api__["a" /* ApiProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/home/home.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar> -->\n</ion-header>\n\n<ion-content padding>\n  <div class="logo-title">\n    <img src="assets/imgs/image60.png" />\n    <h1 class="text-title"><b>Acoustic</b></h1>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductrangeProvider; });
/* unused harmony export productrange */
/* unused harmony export product */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProductrangeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductrangeProvider = /** @class */ (function () {
    function ProductrangeProvider(http) {
        this.http = http;
        this.data = {};
    }
    ProductrangeProvider.prototype.getvaluesproduct = function () {
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
    };
    ProductrangeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductrangeProvider);
    return ProductrangeProvider;
}());

var productrange = /** @class */ (function () {
    function productrange(title, img) {
        this.title = title;
        this.img = img;
    }
    return productrange;
}());

var product = /** @class */ (function () {
    function product(title, description, desc, text, img, image) {
        this.title = title;
        this.description = description;
        this.desc = desc;
        this.text = text;
        this.img = img;
        this.image = image;
        this.info = [];
    }
    return product;
}());

//# sourceMappingURL=productrange.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_catalogue_selection_catalogue_selection__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_catalogue_catalogue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_documentation_documentation__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_infocompany_infocompany__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_productrange_productrange__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_suggestions_suggestions__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_configuration_configuration__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(api, platform, statusBar, splashScreen, config, events, translate) {
        var _this = this;
        this.api = api;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.config = config;
        this.events = events;
        this.translate = translate;
        this.content = [];
        this.page = [];
        this.image_menu = "";
        if (this.platform.is("ios")) {
            this.pages = [
                {
                    title: "Soluciones de aislamiento",
                    icon: "assets/icon/solucionesacusticas.png",
                    component: __WEBPACK_IMPORTED_MODULE_6__pages_catalogue_catalogue__["a" /* CataloguePage */],
                    submenu: [],
                    id: 1,
                },
                {
                    title: "Gama de productos",
                    icon: "assets/icon/gamadeproductos.png",
                    component: __WEBPACK_IMPORTED_MODULE_10__pages_productrange_productrange__["a" /* ProductRangePage */],
                    submenu: [],
                    id: 2,
                },
                {
                    title: "Documentación",
                    icon: "assets/icon/documentacion.png",
                    component: __WEBPACK_IMPORTED_MODULE_7__pages_documentation_documentation__["a" /* DocumentationPage */],
                    submenu: [],
                    id: 3,
                },
                {
                    title: "Notificaciones",
                    icon: "assets/imgs/notificacion.png",
                    component: __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__["a" /* NotificationsPage */],
                    submenu: [],
                    id: 4,
                },
                {
                    title: "Contacto",
                    icon: "assets/icon/contacto.png",
                    component: __WEBPACK_IMPORTED_MODULE_11__pages_suggestions_suggestions__["a" /* SuggestionsPage */],
                    submenu: [],
                    id: 6,
                },
            ];
        }
        else {
            this.pages = [
                {
                    title: "Soluciones de aislamiento",
                    icon: "assets/icon/solucionesacusticas.png",
                    component: __WEBPACK_IMPORTED_MODULE_6__pages_catalogue_catalogue__["a" /* CataloguePage */],
                    submenu: [],
                    id: 1,
                },
                {
                    title: "Gama de productos",
                    icon: "assets/icon/gamadeproductos.png",
                    component: __WEBPACK_IMPORTED_MODULE_10__pages_productrange_productrange__["a" /* ProductRangePage */],
                    submenu: [],
                    id: 2,
                },
                {
                    title: "Documentación",
                    icon: "assets/icon/documentacion.png",
                    component: __WEBPACK_IMPORTED_MODULE_7__pages_documentation_documentation__["a" /* DocumentationPage */],
                    submenu: [],
                    id: 3,
                },
                {
                    title: "Notificaciones",
                    icon: "assets/imgs/notificacion.png",
                    component: __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__["a" /* NotificationsPage */],
                    submenu: [],
                    id: 4,
                },
                {
                    title: "Quienes somos",
                    icon: "assets/icon/quienessomos.png",
                    component: __WEBPACK_IMPORTED_MODULE_8__pages_infocompany_infocompany__["a" /* InfocompanyPage */],
                    submenu: [],
                    id: 5,
                },
                {
                    title: "Contacto",
                    icon: "assets/icon/contacto.png",
                    component: __WEBPACK_IMPORTED_MODULE_11__pages_suggestions_suggestions__["a" /* SuggestionsPage */],
                    submenu: [],
                    id: 6,
                },
            ];
        }
        this.initializeApp();
        this.events.subscribe("channel-submenu", function (data) {
            _this.pages[0].submenu = data;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.config.initLanguage();
            _this.translate.onLangChange.subscribe(function (lang) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_catalogue_catalogue__["a" /* CataloguePage */]);
            });
            if (_this.platform.is("cordova")) {
                _this.splashScreen.show();
                _this.loadAbout();
                window.FirebasePlugin.getToken(function (token) { });
                setTimeout(function () {
                    _this.splashScreen.hide();
                }, 500);
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.toSubmenu = function (p) {
        var _this = this;
        this.api.catalogueGet().subscribe(function (res) {
            if (res.status == 200) {
                _this.content = res.body;
                var item = [];
                item = _this.content.isolation_types;
                for (var i = 0; i < item.length; i++) {
                    var items = item[i];
                    if (p.tid == items.tid) {
                        var data = {
                            item: items,
                            content: _this.content,
                        };
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_catalogue_selection_catalogue_selection__["a" /* CatalogueSelectionPage */], data);
                    }
                }
            }
        });
    };
    MyApp.prototype.loadAbout = function () {
        var _this = this;
        this.api.aboutGet().subscribe(function (res) {
            if (res.status == 200) {
                _this.image_menu = res.body[0].field_logo;
            }
        }, function (error) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n\n        <!--\n        <ion-toolbar color="soprema" class="menu_header" showWhen="ios">\n            <img class="logo" src="assets/imgs/soundproofing_logo.png">  \n                \n        <img style="margin-bottom: -5px;" src="assets/imgs/logo_menu.png">\n        </ion-toolbar> -->\n\n        <ion-toolbar color="soprema" class="menu_header" style="padding:0px;">\n            <img style="margin-bottom: -5px;" src="assets/imgs/logo_menu.png">\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list no-lines>\n            <div class="content_menu" menuClose ion-item *ngFor="let p of pages">\n                <div *ngIf="p.id != 7">\n                    <div (click)="openPage(p)">\n                        <img class="icon" src="{{p.icon}}">\n                        <p class="text_menu">{{p.title}}</p>\n                    </div>\n                    <ion-item class="submenu" *ngFor="let item of p.submenu" (click)="toSubmenu(item)">\n                        <p>{{item.name}}</p>\n                    </ion-item>\n                </div>\n                <div class="content_menu" *ngIf="p.id == 7" (click)="openPage(p)">\n                    <img class="icon" src="{{p.icon}}">\n                    <p class="text_menu_color">{{p.title}}</p>\n                </div>\n            </div>\n        </ion-list>\n\n        <div class="version">\n            <p>v 2.1.0</p>\n        </div>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__providers_configuration_configuration__["a" /* ConfigurationProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    return AppConfig;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_configuration_configuration__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationPage = /** @class */ (function () {
    function ConfigurationPage(navCtrl, navParams, configurationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configurationProvider = configurationProvider;
        this.languages = [];
        this.keys = [];
        this.title_configuration = "";
        this.language_configuration = "";
        this.personal_data = "";
        this.placeholder_name_surname = "";
        this.placeholder_company = "";
        this.placeholder_phone = "";
        this.placeholder_province = "";
        this.save = "";
        this.change = "";
        this.modify_pass = "";
        this.placeholder_newpass = "";
        this.placeholder_oldpass = "";
        this.placeholder_repeatnewpass = "";
        this.legal_advise = "";
        this.text_legaladvise = "";
        this.languages = configurationProvider.fillLanguage();
        this.keys = configurationProvider.fillProvince();
        this.selectedLanguage = this.configurationProvider.currentLang();
    }
    ConfigurationPage.prototype.ionViewDidLoad = function () { };
    ConfigurationPage.prototype.changeIconLanguage = function (item) {
        for (var i = 0; i < this.languages.length; i++) {
            var language = this.languages[i];
            if (language.id == item.id) {
                this.selectedLanguage = item;
                language.enable();
                var lang = this.selectedLanguage.toJson(this.selectedLanguage);
                this.configurationProvider.setLanguage(lang);
            }
            else {
                language.disable();
            }
        }
    };
    ConfigurationPage.prototype.changeIconEnterPage = function () {
        return this.configurationProvider.currentLang();
    };
    ConfigurationPage.prototype.inputData = function () {
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
    };
    ConfigurationPage.prototype.clearInputPass = function () {
        this.oldpass = "";
        this.newpass = "";
        this.confirmnewpass = "";
    };
    ConfigurationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-configuration",template:/*ion-inline-start:"/Users/gabe/Downloads/soprema-master/src/pages/configuration/configuration.html"*/'<ion-header>\n    <ion-navbar color="soprema">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{\'title_configuration\'| translate}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div margin-top>\n        <h5>{{\'language_configuration\' | translate}}</h5>\n        <div *ngFor="let item of languages" (click)="changeIconLanguage(item)">\n            <ion-icon name="{{item.getIcon()}}"></ion-icon>\n            <div class="text">\n                <h6>{{item.language}}</h6>\n            </div>\n        </div>\n    </div>\n        <!--\n    <div margin-top>\n        <h5>{{\'personal_data\' | translate}}</h5>\n        <ion-input type="text" block [(ngModel)]="textname" placeholder="{{\'placeholder_name_surname\' | translate}}"></ion-input>\n        <ion-input type="text" block [(ngModel)]="textbusiness" placeholder="{{\'placeholder_company\' | translate}}"></ion-input>\n        <ion-input type="tel" block [(ngModel)]="telephone" placeholder="{{\'placeholder_phone\' | translate}}"></ion-input>\n    </div>\n\n    <ion-item class="selected">\n        <ion-select [(ngModel)]="province" placeholder="{{\'placeholder_province\'|translate}}">\n            <ion-option *ngFor="let key of keys" value="{{key}}">{{key}}</ion-option>\n        </ion-select>\n    </ion-item> \n    <button ion-button block class="buttons" color="soprema" (click)="inputData()">{{\'save\' | translate}}</button>\n    <div margin-top>\n        <h5>{{\'modify_pass\' | translate}}</h5>\n        <ion-input type="password" [(ngModel)]="oldpass" placeholder="{{\'placeholder_oldpass\' | translate}}"></ion-input>\n        <ion-input type="password" [(ngModel)]="newpass" placeholder="{{\'placeholder_newpass\' | translate}}"></ion-input>\n        <ion-input type="password" [(ngModel)]="confirmnewpass" placeholder="{{\'placeholder_repeatnewpass\' | translate}}"></ion-input>\n        <p class="link">{{\'forgot.pass\' | translate}}</p>\n        <button ion-button block class="buttons" color="soprema" (click)="inputData()">{{\'change\' | translate}}</button>\n    </div>\n    <div margin-top>\n        <h5>{{\'legal_advise\' | translate}}</h5>\n        <p class="link">{{\'text_legaladvise\' | translate}}</p>\n    </div>-->\n</ion-content>'/*ion-inline-end:"/Users/gabe/Downloads/soprema-master/src/pages/configuration/configuration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_configuration_configuration__["a" /* ConfigurationProvider */]])
    ], ConfigurationPage);
    return ConfigurationPage;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueProvider; });
/* unused harmony export CatalogueSection */
/* unused harmony export InfoCategory */
/* unused harmony export ContentCategory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogueProvider = /** @class */ (function () {
    function CatalogueProvider(http) {
        this.http = http;
        this.content = [
            { title: "Tipo de edificio", img: "assets/imgs/image1.jpg", id: 1 },
            { title: " Elemento constructivo", img: "assets/imgs/image2.jpg", id: 2 }
        ];
    }
    CatalogueProvider.prototype.getContentCatalogue = function () {
        return this.content;
    };
    CatalogueProvider.prototype.getContentCatalogueSection = function () {
        var content = [
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
        var temp = [];
        for (var i = 0; i < content.length; i++) {
            var con = content[i];
            if (con.idcat == 1) {
                var cinfo1 = new InfoCategory(1, "TECSOUND® 2 FT 80 / FIJACIÓN PH-T", "PM-2", 1);
                cinfo1.content = new ContentCategory(1, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo1.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo1);
                var cinfo2 = new InfoCategory(2, "INSOPLAST 6 / INSOPLAST AA6 TECSOUND® S 50 BAND 50", "PM(b)-5", 1);
                cinfo2.content = new ContentCategory(2, "PM(b)-5", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo2.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo2);
                var cinfo3 = new InfoCategory(3, "TEXSIMPACT / BANDA TEXFON", "S-1", 2);
                cinfo3.content = new ContentCategory(3, "S-1", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo3.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo3);
                var cinfo4 = new InfoCategory(4, "TEXTFON / BANDA TEXFON", "S-6", 2);
                cinfo4.content = new ContentCategory(4, "S-6", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo4.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo4);
                var cinfo5 = new InfoCategory(5, "TECSOUND® FT 55AL", "BJ-1", 3);
                cinfo5.content = new ContentCategory(5, "BJ-1", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo5.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo5);
            }
            if (con.idcat == 2) {
                var cinfo1 = new InfoCategory(6, "Lw 21 dB", "Suelo S-1", 4);
                cinfo1.content = new ContentCategory(6, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo1.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo1);
                var cinfo2 = new InfoCategory(7, "Lw 22 dB", "Suelo S-6", 4);
                cinfo2.content = new ContentCategory(7, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo2.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo2);
                var cinfo3 = new InfoCategory(8, "Lw 22 dB", "Suelo S-2", 4);
                cinfo3.content = new ContentCategory(8, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo3.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo3);
                var cinfo4 = new InfoCategory(9, "Lw 26 dB", "Suelo S-5", 4);
                cinfo4.content = new ContentCategory(9, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo4.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo4);
                var cinfo5 = new InfoCategory(10, "Lw 21 dB", "Suelo S-4", 5);
                cinfo5.content = new ContentCategory(10, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo5.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo5);
                var cinfo6 = new InfoCategory(11, "Lw 21 dB", "Suelo S-3", 5);
                cinfo6.content = new ContentCategory(11, "PM-2", "Solución para el aislamiento al ruido de impacto de forjados en viviendas de obra nueva, mediante lámina de polietileno reticulado tipo TEXSIMPACT. De fácil colocación por su ligereza y presentación de los rollos. La solución se complementa con la banda perimetral tipo BANDA DESOLARIZACIÓN TEXFON, banda autoadhesiva para la desolarización del suelo con los paramentos verticales.", "TECSOUND® FT 55 AL reúne en un único producto un material absorbente y una lámina aislante TECSOUND® con las características necesarias para dar una respuesta a este problema.", "RA = 80,5 dBA", "12,5mm", "assets/imgs/Tecsound_desplegado.png", "Detalles CAD", "assets/imgs/Tecsound_desplegado.png", "Mejora del aislamiento al ruido de impacto", "assets/imgs/Tecsound_desplegado.png", "ventajas");
                cinfo6.content.advantagearray = ["Elevado aislamiento acústico, combinado con elementos ligeros y rígidos como placas de yeso laminar, tablero de madera o chapas metálicas, sin apenas incremento del espesor.", "Elevado amortiguamiento mejorando así especialmente el aislamiento a bajas frecuencias y el aislamiento acústico a ruido de lluvia en cubiertas ligeras.", "Auto-extinguible.", "Flexible y adaptable a cualquier tipo de forma y superfície irregular.", "Gran capacidad de elongación.", "Fácil de manipular y cortar.", "Resistente al frío y al calor.", "No absorbe agua.", "Puede actuar como barrerra de vapor.", "Excelente resistencai al envejecimiento.", "Imputrescible"];
                con.categories.push(cinfo6);
            }
            temp.push(con);
        }
        return temp;
    };
    CatalogueProvider.prototype.getCategoriesInfo = function (idcat) {
        var categories;
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
        }
        else if (idcat == 2) {
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
    };
    CatalogueProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CatalogueProvider);
    return CatalogueProvider;
}());

var CatalogueSection = /** @class */ (function () {
    function CatalogueSection(id, title, img, idcat) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.idcat = idcat;
        this.categories = [];
    }
    return CatalogueSection;
}());

var InfoCategory = /** @class */ (function () {
    function InfoCategory(id, title, prefix, category) {
        this.id = id;
        this.title = title;
        this.prefix = prefix;
        this.category = category;
    }
    return InfoCategory;
}());

var ContentCategory = /** @class */ (function () {
    function ContentCategory(id, title, description, info, unit, unitinfo, img, title2, img2, subtitle, image, adv) {
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
    return ContentCategory;
}());

//# sourceMappingURL=prov-catalogue.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationProvider; });
/* unused harmony export Language */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigurationProvider = /** @class */ (function () {
    function ConfigurationProvider(http, storage, translate) {
        this.http = http;
        this.storage = storage;
        this.translate = translate;
    }
    ConfigurationProvider.prototype.initLanguage = function () {
        var _this = this;
        this.translate.setDefaultLang("es");
        this.translate.use("es");
        this.storage.get("lang").then(function (data) {
            if (data == "es" || data === undefined) {
                _this.translate.setDefaultLang("es");
                _this.translate.use("es");
                return new Language(1, "Español", true);
            }
            else {
                /*this.translate.setDefaultLang("pt");
                this.translate.use("pt");
                return new Language(2, "Portugues", false);*/
            }
        }, function (error) {
            _this.translate.setDefaultLang("es");
            _this.translate.use("es");
            _this.storage.set("lang", "es");
            return new Language(1, "Español", true);
        });
    };
    ConfigurationProvider.prototype.currentLang = function () {
        if (this.language == undefined) {
            this.storage.set("lang", "es");
        }
        return this.language;
    };
    ConfigurationProvider.prototype.setLanguage = function (language) {
        this.language = language;
        var lang = "es";
        if (language.id == 1) {
            this.translate.setDefaultLang("es");
            this.translate.use("es");
        }
        else {
            lang = "pt";
            this.translate.setDefaultLang("pt");
            this.translate.use("pt");
        }
        this.storage.set("lang", lang).then(function (data) { }, function (error) { });
    };
    ConfigurationProvider.prototype.fillLanguage = function () {
        var language = [];
        var lan1 = new Language(1, "Español", true);
        language.push(lan1);
        //Portugués desactivat
        //let lan2 = new Language(2, "Portugues", false);
        //language.push(lan2);
        return language;
    };
    ConfigurationProvider.prototype.fillProvince = function () {
        var province = [
            "Lleida",
            "Barcelona",
            "Tarragona",
            "Girona",
            "Huesca",
            "Zaragoza",
        ];
        return province;
    };
    ConfigurationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], ConfigurationProvider);
    return ConfigurationProvider;
}());

var Language = /** @class */ (function () {
    function Language(id, language, active) {
        this.id = id;
        this.language = language;
        this.active = active;
    }
    Language.prototype.enable = function () {
        this.active = true;
    };
    Language.prototype.disable = function () {
        this.active = false;
    };
    Language.prototype.getIcon = function () {
        if (this.active) {
            return "radio-button-on";
        }
        else {
            return "radio-button-off";
        }
    };
    Language.prototype.toJson = function () {
        var data = {
            id: this.id,
            language: this.language,
            active: this.active,
        };
        return data;
    };
    Language.prototype.loadFromJSON = function (data) {
        this.id = data["id"];
        this.language = data["language"];
        this.active = data["active"];
        return [this.id, this.language, this.active];
    };
    return Language;
}());

//# sourceMappingURL=configuration.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map