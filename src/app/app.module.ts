import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { HeroService } from './services/hero/hero.service';
import {HttpClientModule} from "@angular/common/http";
import { HeroComponent } from './views/hero/hero.component';
import { HeaderComponent } from './controllers/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent
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
