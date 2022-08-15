import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignSignupComponent } from './sign-signup/sign-signup.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full'},
  { path: "login", component: SignSignupComponent},
  { path: "welcome", component: WelcomePageComponent}
];

// const routes: Routes = [
//   { path: "employees", component: EmployeeListComponent,},
//   { path: "", redirectTo: "employees", pathMatch: 'full'},
//   { path: "create-employee", component: CreateEmployeeComponent},
//   { path: 'update-employee/:id', component: UpdateEmployeeComponent}
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
