import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: 'app/components/home-page/home-page.module#HomePageModule'},
  { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
  { path: 'registration', loadChildren: 'app/components/registration/registration.module#RegistrationModule' },
  { path: 'user-info',
    loadChildren: 'app/components/user-profile/userinfo-panel.module#UserinfoPanelModule' },
  { path: 'admin',
    loadChildren: 'app/components/admin/list-of-users.module#ListOfUsersModule' },
  { path: 'payment/:userId/:projectId/:amount',
    loadChildren: 'app/components/payment/payment.module#PaymentModule' },
  { path: 'project/create',
    loadChildren: 'app/components/project/project-creating/project-creating.module#ProjectCreatingModule' },
  { path: 'project/edit/:user_id/:project_id',
    loadChildren: 'app/components/project/project-editing/project-editing.module#ProjectEditingModule' },
  { path: 'project-info/:project_id',
    loadChildren: 'app/components/project/project-info/project-info.module#ProjectInfoModule' },
  { path: 'subscribed-projects',
    loadChildren: 'app/components/account-menu/subscribed-projects/subscribed-projects.module#SubscribedProjectsModule' },
  { path: 'my-projects',
    loadChildren: 'app/components/account-menu/my-projects/my-projects.module#MyProjectsModule' },
  { path: 'my-achievements',
    loadChildren: 'app/components/account-menu/my-achievements/my-achievements.module#MyAchievementsModule' },
  { path: 'search',
    loadChildren: 'app/components/search/search.module#SearchModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
