import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NewReelFormComponent } from './components/new-reel-form/new-reel-form.component';
import { ReelViewComponent } from './components/reel-view/reel-view.component';
import { NewShotFormComponent } from './components/new-shot-form/new-shot-form.component';

import { TestingService } from './services/testing.service';
import { StorageService } from './services/storage.service';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewReelFormComponent,
    ReelViewComponent,
    NewShotFormComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    TestingService,
    StorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
