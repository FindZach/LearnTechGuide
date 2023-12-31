import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { TutorialDetailComponent } from './components/tutorial/tutorial-detail/tutorial-detail.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { TutorialAdminComponent } from './pages/tutorial-admin/tutorial-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to the home page
  { path: 'home', component: HomeComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'tutorial/:slug', component: TutorialDetailComponent },
  { path: 'admin/tutorial', component: TutorialAdminComponent },
 // { path: 'about', component: AboutComponent },
 // { path: 'tutorials', component: TutorialsComponent },
 // { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for handling unknown routes or 404 errors
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
