import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

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
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
