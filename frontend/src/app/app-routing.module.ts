import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* My Components */
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { TestApiComponent } from './test-api/test-api.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
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
