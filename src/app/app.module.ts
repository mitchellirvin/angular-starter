import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutMe } from './components/aboutme';
import { Welcome } from './components/welcome';

import { Service } from './components/service';


@NgModule({
  declarations: [
    AppComponent,
    AboutMe,
    Welcome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatToolbarModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
