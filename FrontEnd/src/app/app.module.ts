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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LocalDateTimePipe } from './presentation/pipe/local-date-time.pipe';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { ChatComponent } from './presentation/pages/dashBoard/messageExchange/chat/chat.component';
import { MessagesComponent } from './presentation/pages/dashBoard/messageExchange/messages/messages.component';
import { NavHomeComponent } from './presentation/shared/navHome/navHome.component';
import { NavChatComponent } from './presentation/shared/navChat/navChat.component';
import { NavDashComponent } from './presentation/shared/navDash/navDash.component';
import { NavMessageComponent } from './presentation/shared/navMessage/navMessage.component';
import { DashCardComponent } from './presentation/pages/dashBoard/dashCard/dashCard.component';
import { SidebarComponent } from './presentation/pages/dashBoard/sidebar/sidebar.component';
import { ListAllPostsComponent } from './presentation/pages/dashBoard/sidebar/listAllPosts/listAllPosts.component';
import { MessageExchangeComponent } from './presentation/pages/dashBoard/messageExchange/messageExchange.component';
import { NavMessageExchangeComponent } from './presentation/shared/navMessageExchange/navMessageExchange.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeCardComponent,
    LoginComponent,
    RegisterComponent,
    DashBoardComponent,
    ChatComponent,
    MessagesComponent,
    NavHomeComponent,
    NavChatComponent,
    NavDashComponent,
    NavMessageExchangeComponent,
    NavMessageComponent,
    DashCardComponent,
    SidebarComponent,
    ListAllPostsComponent,
    MessageExchangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    LocalDateTimePipe,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
