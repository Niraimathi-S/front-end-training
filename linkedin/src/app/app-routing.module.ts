import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { MyNetworkComponent } from './my-network/my-network.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // {path:'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {
    path: 'myNetwork',
    loadChildren: () =>
      import('./my-network/my-network.module').then((m) => m.MyNetworkModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
