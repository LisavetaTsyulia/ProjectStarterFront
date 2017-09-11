import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
  { path: 'registration', loadChildren: 'app/components/registration/registration.module#RegistrationModule' },
  { path: 'project/create',
    loadChildren: 'app/components/project/project-creating/project-creating.module#ProjectCreatingModule' },
  { path: 'project/edit/:user_id/:project_id',
    loadChildren: 'app/components/project/project-editing/project-editing.module#ProjectEditingModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
