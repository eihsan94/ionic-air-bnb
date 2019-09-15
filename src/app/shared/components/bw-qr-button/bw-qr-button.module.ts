import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BwQrButtonComponent } from './bw-qr-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
  ],
  declarations: [
    BwQrButtonComponent,
  ],
  exports: [
    BwQrButtonComponent,
  ]
})
export class BwQrButtonModule { }
