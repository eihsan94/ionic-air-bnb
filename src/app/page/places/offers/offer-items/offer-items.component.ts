import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../place';

@Component({
  selector: 'app-offer-items',
  templateUrl: './offer-items.component.html',
  styleUrls: ['./offer-items.component.scss']
})
export class OfferItemsComponent implements OnInit {
  @Input() offer: Place;
  constructor() { }

  ngOnInit() {
  }

  getDummyDate() {
    return new Date;
  }
}
