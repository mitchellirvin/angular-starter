import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMe } from './components/aboutme';
import { Welcome } from './components/welcome';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'aboutme', component: AboutMe }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
