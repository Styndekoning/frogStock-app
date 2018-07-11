import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { AddNightPage } from '../add-night/add-night';

@Component({
	selector: 'page-nights',
	templateUrl: 'nights.html',
})
export class NightsPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController
	) { }

	addNight() {
		let add = this.modalCtrl.create(AddNightPage);
		add.present();
	}
}
