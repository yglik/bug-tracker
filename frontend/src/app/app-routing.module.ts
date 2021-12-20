import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* My Components */
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { TestApiComponent } from './test-api/test-api.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'test-api', component: TestApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
