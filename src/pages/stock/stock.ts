import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Bottle } from '../../models/bottle.model';

@Component({
	selector: 'page-stock',
	templateUrl: 'stock.html',
})
export class StockPage {

	private stock: Bottle[] = [
		{
			"id": 0,
			"name": "Carta Blanca",
			"owner": "Henk",
			"currentAmount": 200,
			"milliLiters": 1500,
			"brand": "Barcardi",
			"price": 18.50,
			"percentage": 37.5,
			"description": "Barcardi Carta Blanca is een aromatische witte rum(gewoon bezine dus)",
			"show": false
		},
		{
			"id": 1,
			"name": "Vodka",
			"owner": "De Mooiboii",
			"currentAmount": 700,
			"milliLiters": 1000,
			"brand": "Esbjaerg",
			"price": 11.80,
			"percentage": 40,
			"description": "Bergse vodka",
			"show": false
		},

	];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
	) { }

	toggleDetail(bottle: Bottle) {
		bottle.show = !bottle.show;
	}

}
