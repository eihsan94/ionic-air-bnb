import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './page/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full'},
  { path: 'auth', loadChildren: './page/auth/auth.module#AuthPageModule'},
  { path: 'places', loadChildren: './page/places/places.module#PlacesPageModule', canLoad: [AuthGuard]},
  { path: 'bookings', loadChildren: './page/bookings/bookings.module#BookingsPageModule', canLoad: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
