import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
  { path: 'registration', loadChildren: 'app/components/registration/registration.module#RegistrationModule' },
  { path: 'project-creating',
    loadChildren: 'app/components/project-creating/project-creating.module#ProjectCreatingModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
