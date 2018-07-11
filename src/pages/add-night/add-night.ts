import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user.model';

@Component({
	selector: 'page-add-night',
	templateUrl: 'add-night.html',
})
export class AddNightPage {
	private users: User[] = [
		{
			"id": 0,
			"name": "Henk",
			"admin": true,
			"checked": false
		},
		{
			"id": 1,
			"name": "Wawazilla",
			"admin": false,
			"checked": false
		}
	];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams
	) { }
}
