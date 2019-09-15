import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { AuthService } from './page/auth/auth.service';
import { Router } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private authService: AuthService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('splashScreen')) {
        Plugins.SplashScreen.hide();
      }
    });
  }
  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
