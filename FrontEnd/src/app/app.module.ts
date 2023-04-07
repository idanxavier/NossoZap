import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './presentation/pages/dashBoard/dashBoard.component';
import { HomeCardComponent } from './presentation/pages/homePage/homeCard/homeCard.component';
import { HomePageComponent } from './presentation/pages/homePage/homePage.component';
import { LoginComponent } from './presentation/pages/homePage/login/login.component';
import { RegisterComponent } from './presentation/pages/homePage/register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeCardComponent,
    LoginComponent,
    RegisterComponent,
    DashBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
