import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild('hamburgerContent') navCtrl: NavController;

	rootPage: any = HomePage;
	pages: Array<{ title: string, component: any }>;

	constructor(
		platform: Platform,
		statusBar: StatusBar,
		splashScreen: SplashScreen,
		public menuCtrl: MenuController
	) {
		platform.ready().then(() => {
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}

	toHome() {
		if (!(this.navCtrl.getActive().instance instanceof HomePage)) {
			this.navCtrl.push(HomePage);
		}
		this.menuCtrl.close();
	}

	toSettings() {
		if (!(this.navCtrl.getActive().instance instanceof SettingsPage)) {
			this.navCtrl.push(SettingsPage);
		}
		this.menuCtrl.close();
	}
}
