import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';

const routes: Routes = [


  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'verify-email', component: VerifyEmailComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
