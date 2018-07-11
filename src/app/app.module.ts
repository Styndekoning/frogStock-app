import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { NightsPage } from '../pages/nights/nights';
import { StatsPage } from '../pages/stats/stats';
import { StockPage } from '../pages/stock/stock';
import { AddNightPage } from '../pages/add-night/add-night';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		SettingsPage,
		StockPage,
		NightsPage,
		StatsPage,
		AddNightPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		SettingsPage,
		StockPage,
		NightsPage,
		StatsPage,
		AddNightPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
