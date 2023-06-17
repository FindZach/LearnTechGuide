import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { TutorialDetailComponent } from './components/tutorial/tutorial-detail/tutorial-detail.component';
import { TutorialListComponent } from './components/tutorial/tutorial-list/tutorial-list.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ModalComponent,
    PageNotFoundComponent,
    TutorialDetailComponent,
    TutorialListComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
