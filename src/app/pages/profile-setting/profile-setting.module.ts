import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-accordion';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { ProfileSettingPage } from './profile-setting.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AccordionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileSettingPage]
})
export class ProfileSettingPageModule {}
