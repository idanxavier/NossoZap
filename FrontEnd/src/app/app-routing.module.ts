import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/security/auth.guard';
import { DashBoardComponent } from './presentation/pages/dashBoard/dashBoard.component';
import { HomeCardComponent } from './presentation/pages/homePage/homeCard/homeCard.component';
import { HomePageComponent } from './presentation/pages/homePage/homePage.component';
import { LoginComponent } from './presentation/pages/homePage/login/login.component';
import { RegisterComponent } from './presentation/pages/homePage/register/register.component';

const routes: Routes = [
  { path: '', component: HomePageComponent,
    children: [
      {path: '', component: HomeCardComponent},
      {path: 'home', component: HomeCardComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]},
    
    
  { path: 'dashboard', component: DashBoardComponent, canActivate: [AuthGuard], 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
