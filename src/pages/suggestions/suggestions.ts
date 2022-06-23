import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { ConfigurationPage } from '../configuration/configuration';
import { ApiProvider } from '../../providers/api/api';
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: 'page-suggestions',
	templateUrl: 'suggestions.html',
})
export class SuggestionsPage {

	email: String;
	text: String;
	id: number;
	content: any[] = [];
	suggestion: string = "";
	text_suggestion: string = "";
	placeholder_suggestion: string = "";
	send: string = "";
	private loading: Loading;
	legal: boolean = false;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		private translate: TranslateService,
		private loadingCtrl: LoadingController,
		private api: ApiProvider) {
	}

	ionViewDidLoad() { }

	clear() {
		this.legal = false;
		this.email = "";
		this.text = "";
	}

	sendSuggestion() {

		if (this.text == '' || this.text == undefined) {
			this.showAlert(this.i18n('form.mandatory.fields'));
		}
		else if (this.legal == false) {
			this.showAlert(this.i18n('legal.accept'));
		}
		else {
			this.presentLoadingDefault();
			let item = {
				"email": this.email,
				"message": this.text
			}
			this.api.sendMessage(item).subscribe(data => {
				console.log(data);
				this.clear();
				this.dismissLoading();
				this.showAlert('Mensaje enviado');
			}, error => {
				console.log(error);
			});
		}
	}

	showAlert(subtitle) {
		let alert = this.alertCtrl.create({
			title: this.i18n('title'),
			subTitle: subtitle,
			buttons: ['Aceptar']
		});
		alert.present();
	}

	private i18n(key: string): string {
		return this.translate.instant(key)
	}

	toConfiguration() {
		this.navCtrl.push(ConfigurationPage);
	}


	presentLoadingDefault() {
		this.loading = this.loadingCtrl.create({
			content: this.i18n('sending')
		});

		this.loading.present();
	}

	dismissLoading() {
		if (this.loading != undefined) {
			this.loading.dismissAll();
		}
	}

	openLegal() {
		window.open('https://www.soprema.com/en/privacy-policy', "_system");
	}

}
