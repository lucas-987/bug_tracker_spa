import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BugsComponent } from './components/bugs/bugs.component'
import { BugFormComponent } from './components/bug-form/bug-form.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'prefix' },
  { path: 'home', component: BugsComponent },
  { path: 'add', component: BugFormComponent, data: { update: false } },
  { path: 'update/:id', component: BugFormComponent, data: { update: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
