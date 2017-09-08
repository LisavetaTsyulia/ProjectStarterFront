import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
  { path: 'registration', loadChildren: 'app/components/registration/registration.module#RegistrationModule' },
  { path: 'admin',
    loadChildren: 'app/components/admin/list-of-users/list-of-users.module#ListOfUsersModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
