import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full'},
  { path: 'auth', loadChildren: './page/auth/auth.module#AuthPageModule'},
  { path: 'places', loadChildren: './page/places/places.module#PlacesPageModule'},
  { path: 'bookings', loadChildren: './page/bookings/bookings.module#BookingsPageModule'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
