import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './../main/main.component';
import { NotFoundComponent } from './../not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'detail/:id', loadChildren: './../product-details/product-details.module#ProductDetailsModule'},
    { path: 'main', component: MainComponent },
    { path: '**', component: NotFoundComponent },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

