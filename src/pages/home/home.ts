import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NightsPage } from '../nights/nights';
import { StatsPage } from '../stats/stats';
import { StockPage } from '../stock/stock';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

	}

	toNightsPg() {
		this.navCtrl.push(NightsPage);
	}

	toStatsPg() {
		this.navCtrl.push(StatsPage);
	}

	toStockPg() {
		this.navCtrl.push(StockPage);
	}

}
