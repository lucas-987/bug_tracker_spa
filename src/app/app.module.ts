import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { BugComponent } from './components/bug/bug.component';
import { BugDescriptionComponent } from './components/bug-description/bug-description.component';
import { BugFormComponent } from './components/bug-form/bug-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    BugComponent,
    BugDescriptionComponent,
    BugFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
