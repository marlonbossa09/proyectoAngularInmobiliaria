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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
