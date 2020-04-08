import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileAboutComponent} from './profile-about/profile-about.component';
import { ProfileContactComponent } from './profile-contact/profile-contact.component';
import { ProfileSkillsComponent } from './profile-skills/profile-skills.component';

const routes: Routes = [
  {path:'about', component: ProfileAboutComponent},
  {path:'contact', component: ProfileContactComponent },
  {path:'skills', component: ProfileSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
export const routingComponents = [ProfileAboutComponent,ProfileContactComponent, ProfileSkillsComponent];