import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CheckboxModule} from "primeng/checkbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import {httpInterceptorProviders} from "./auth.interceptor";
import {HttpClientModule} from "@angular/common/http";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ChatComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PasswordModule,
        ButtonModule,
        RippleModule,
        CheckboxModule,
        BrowserAnimationsModule,
        FormsModule,
        InputTextModule,
      ReactiveFormsModule,
      HttpClientModule, MessageModule,
      MessagesModule
    ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
