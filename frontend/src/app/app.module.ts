import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SidebarComponent,
    DashboardComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
