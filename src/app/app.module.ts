import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
