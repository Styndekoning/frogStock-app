import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNightPage } from './add-night';

@NgModule({
  declarations: [
    AddNightPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNightPage),
  ],
})
export class AddNightPageModule {}
