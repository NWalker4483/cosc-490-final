import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollsComponent } from './polls/polls.component';
import { RegisterComponent } from './register/register.component';
import { VoteComponent } from './vote/vote.component';
const routes: Routes = [
  {
    path: '',
    component: VoteComponent
  }, {
    path: 'vote',
    component: VoteComponent
  },{
  path: 'register',
  component: RegisterComponent
},{
  path: 'propose',
  component: PollsComponent
},{
  path: 'polls',
  component: PollsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
