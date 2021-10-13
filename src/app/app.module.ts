import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { HeroService } from './services/hero/hero.service';
import {HttpClientModule} from "@angular/common/http";
import { HeroesComponent } from './views/heroes/heroes.component';
import { HeaderComponent } from './controllers/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { ErrorComponent } from './views/error/error.component';
import { SingleHeroComponent } from './views/single-hero/single-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeaderComponent,
    LoginComponent,
    ErrorComponent,
    SingleHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule
  ],
  providers: [
    HeroService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
