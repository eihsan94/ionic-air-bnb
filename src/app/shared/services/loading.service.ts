import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingCtrl: LoadingController,
  ) { }

  public start(message?: string) {
    this.loadingCtrl.create({
      keyboardClose: true,
      message: message
    })
    .then(loadingEl => {
      loadingEl.present();
    });
  }
  public stop() {
    this.loadingCtrl.dismiss();
  }
}
