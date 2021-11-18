import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ticket', component: TicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
