import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AppRouterModule, routingComponents } from './app-routing.module';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouterModule ],
  declarations: [ AppComponent, routingComponents, ProfileHeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
