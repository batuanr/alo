import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {AuthGuard} from "./service/auth.guard";

const routes: Routes = [
  {
    path: '', redirectTo: 'chat', pathMatch: 'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path: 'chat', component: ChatComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
