import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlacesService } from '../../places.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit, OnDestroy {
  form: FormGroup;
  startDate =  new Date().toISOString();
  private _subs = new Subscription();

  constructor(
    private placeService: PlacesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.maxLength(180),
        ]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.min(1),
        ]
      }),
      availableFrom: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      availableTo: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
    });
    this._subs.add(this.form.controls.availableFrom.valueChanges.subscribe(v => this.startDate = v));
  }
  onCreateOffer() {
    if (!this.form.valid) {
      return;
    }
    this.placeService.addPlace(this.form.value).subscribe(() => { // we dont need to clear this subs because the observable use take(1)
      this.form.reset();
      this.router.navigateByUrl('/places/tabs/offers');
    });
  }

  datesValid(): boolean {
    const startDate = new Date(this.form.value.availableFrom);
    const endDate = new Date(this.form.value.availableTo);
    return endDate > startDate;
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
