import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  // { path: '', component: UserComponent },
  { path: 'detail', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),BrowserModule,CommonModule ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
