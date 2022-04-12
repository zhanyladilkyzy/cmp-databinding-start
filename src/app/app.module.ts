import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClockpitComponent } from './clockpit/clockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
