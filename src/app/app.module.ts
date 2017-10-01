import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http'

import { VedioService } from './vedio.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VedioCenterComponent } from './vedio-center/vedio-center.component';
import { VedioListComponent } from './vedio-list/vedio-list.component';
import { VedioDetailComponent } from './vedio-detail/vedio-detail.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VedioCenterComponent,
    VedioListComponent,
    VedioDetailComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [VedioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
