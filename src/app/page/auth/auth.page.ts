import { Component, OnInit } from '@angular/core';
import { AuthService, AuthResData } from './auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  authenticate(email: string, password: string) {
    this.isLoading = true;
    const authObs: Observable < AuthResData > = this.isLogin ? this.authService.login(email, password) : this.authService.signup(email, password);
    authObs.subscribe(() => this.router.navigateByUrl('/places/tabs/discover'));
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authenticate(form.value.email, form.value.password);
  }
  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
