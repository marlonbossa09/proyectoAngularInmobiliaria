import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
// RUTAS
import { APP_ROUTING } from './app.routes';
import { ThreeComponent } from './three/three.component';
import { Modelo3DComponent } from './components/home/modelo3D.component';;
import { Modelo3D3Component } from './components/about/modelo3D3.component';
import { Modelo3D2Component } from './components/home/modelo3D2.component';
// SERVICIOS
import { HeroesService } from './components/services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { Modelo3D4Component } from './components/home/modelo3D4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ThreeComponent,
    Modelo3DComponent,
    Modelo3D2Component,
    Modelo3D3Component,
    HeroesComponent,
    HeroeComponent,
    Modelo3D3Component,
    Modelo3D4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
