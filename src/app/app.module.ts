import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewShotFormComponent } from './components/new-shot-form/new-shot-form.component';
import { TestingService } from './services/testing.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NewShotFormComponent
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
