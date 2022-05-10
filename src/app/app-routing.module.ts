import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewShotFormComponent } from './components/new-shot-form/new-shot-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReelViewComponent } from './components/reel-view/reel-view.component';

const routes: Routes = [{
  path: "",
  redirectTo: "home",
  pathMatch: "full",
},
{ path: "home", component: HomeComponent },
{ path: "new-shot", component: NewShotFormComponent },
{ path: "reel", component: ReelViewComponent },
{
  path: "**",
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
