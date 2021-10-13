import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './views/heroes/heroes.component';
import {LoginComponent} from "./views/login/login.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {ErrorComponent} from "./views/error/error.component";
import {SingleHeroComponent} from "./views/single-hero/single-hero.component";

const routes: Routes = [
    {path: '',component:LoginComponent},
    {path:"heroes",canActivate:[AuthGuard],component:HeroesComponent},
    {path: 'heroes/:id',canActivate:[AuthGuard],component:SingleHeroComponent},
    {path: 'not-found',component:ErrorComponent},
    {path:"**",redirectTo:'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
