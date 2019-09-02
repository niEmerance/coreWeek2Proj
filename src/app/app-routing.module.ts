import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { AboutDeveloperComponent } from './about-developer/about-developer.component';

const routes: Routes = [
    {path:'userform', component: UserFormComponent},
    {path:'aboutdeveloper', component: AboutDeveloperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
