import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to the home page
  { path: 'home', component: HomeComponent },
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
