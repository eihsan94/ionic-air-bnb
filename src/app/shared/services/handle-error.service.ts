import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../page/auth/auth.service';
import { AlertController } from '@ionic/angular';

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandlerService {
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    ) {}

  handleError(error) {
    // TODO: send the error to remote logging infrastructure
    let message;
    if (error.status === 401) {
      message = (this.authService.userIsAuthenticated) ? `ログインしてください。` : 'ユーザーネームまたはパスワードが違います。';
      this.router.navigate(['/auth']);
    } else {
      // message = (error.error instanceof ErrorEvent) ? error.error.message : `（${error.status}）エラーが発生しました、管理者にご連絡をください。`;
      message =  error.error.error.message;
      }

    // TODO: better job of transforming error for user consumption
    this._showAlert(message);

  }
  private _showAlert(message) {
    this.alertCtrl.create({header: 'Authentication failed', message: message, buttons: ['Okay']})
    .then(alertEl => {
      alertEl.present();
    });
  }
}
