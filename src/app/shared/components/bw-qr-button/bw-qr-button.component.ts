import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'bw-qr-button',
  templateUrl: './bw-qr-button.component.html',
  styleUrls: ['./bw-qr-button.component.scss'],
})
export class BwQrButtonComponent {

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(private barcodeScanner: BarcodeScanner) {
    this.encodeData = 'https://www.FreakyJolly.com';
    // Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        // alert('Barcode data ' + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
}
