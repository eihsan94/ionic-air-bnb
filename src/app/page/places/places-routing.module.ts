import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';

// tab routes
const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {path: '', loadChildren: './discover/discover.module#DiscoverPageModule'},
          {path: ':placeId', loadChildren: './discover/place-detail/place-detail.module#PlaceDetailPageModule'},
        ],
      },
      {
        path: 'offers',
        children: [
          {path: '', loadChildren: './offers/offers.module#OffersPageModule'},
          {path: 'new', loadChildren: './offers/new-offer/new-offer.module#NewOfferPageModule'},
          {path: 'edit/:placeId', loadChildren: './offers/edit-offer/edit-offer.module#EditOfferPageModule'},
          {path: ':placeId', loadChildren: './offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule'},
        ],
      },
      {
        // path redircet when the user go /places/tabs
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full',
      }
    ],
  },
  {
    // path redircet when the user go /places
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule,
  ],
})
export class PlacesRoutingModule { }
