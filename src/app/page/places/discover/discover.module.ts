import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiscoverPage } from './discover.page';
import { BwQrButtonModule } from 'src/app/shared-components/bw-qr-button/bw-qr-button.module';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    BwQrButtonModule
  ],
  declarations: [DiscoverPage]
})
export class DiscoverPageModule {}
