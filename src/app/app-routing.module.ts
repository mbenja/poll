import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePollComponent } from './create-poll/create-poll.component';
import { ViewPollComponent } from './view-poll/view-poll.component';


const routes: Routes = [
  { path: '', component: CreatePollComponent },
  { path: 'poll/:id', component: ViewPollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
