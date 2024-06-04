import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '',
  component: FormComponent,
  pathMatch: 'full'
  },
  { path: 'login',
  component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
