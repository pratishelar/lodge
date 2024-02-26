import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { DeluxeComponent } from './deluxe/deluxe.component';
import { RoyalDeluxeComponent } from './royalDeluxe/royalDeluxe.component';
import { DeluxeFamilyComponent } from './deluxeFamily/deluxeFamily.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [										
    AppComponent,
      NavbarComponent,
      HeroComponent,
      FooterComponent,
      HomeComponent,
      RoomsComponent,
      DeluxeComponent,
      RoyalDeluxeComponent,
      DeluxeFamilyComponent,
      SearchComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
