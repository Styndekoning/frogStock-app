import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightsPage } from './nights';

@NgModule({
  declarations: [
    NightsPage,
  ],
  imports: [
    IonicPageModule.forChild(NightsPage),
  ],
})
export class NightsPageModule {}
