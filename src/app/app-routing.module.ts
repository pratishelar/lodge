import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeluxeComponent } from './deluxe/deluxe.component';
import { RoyalDeluxeComponent } from './royalDeluxe/royalDeluxe.component';
import { DeluxeFamilyComponent } from './deluxeFamily/deluxeFamily.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'deluxe', component: DeluxeComponent },
  { path: 'royalDeluxe', component: RoyalDeluxeComponent },
  { path: 'deluxeFamily', component: DeluxeFamilyComponent },
  { path: '**',redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
