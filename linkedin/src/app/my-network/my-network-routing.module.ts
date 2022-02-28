import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNetworkComponent } from './my-network.component';

const routes: Routes = [
  {path:':id',component:MyNetworkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNetworkRoutingModule { }
