import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';

import { SingleTaskComponent } from './single-task/single-task.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'edit/:id',
  component:SingleTaskComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
