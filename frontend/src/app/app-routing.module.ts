import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BreedVoterComponent} from './breed-voter/breed-voter.component'
const routes: Routes = [
  {
  path: 'vote',
  component: BreedVoterComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
