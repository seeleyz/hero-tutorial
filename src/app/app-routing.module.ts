import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/

// added by hand
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [
    // CommonModule

    // add by hand --首先初始化路由器，并让它开始监听浏览器中的地址变化
    RouterModule.forRoot(routes),
  ],
  // declarations: []

  // added by hand
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
