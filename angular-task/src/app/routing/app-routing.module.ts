import { NgModule }  from '@angular/core';
//import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './../product-details/product-details.component';
import { MainComponent } from './../main/main.component';
import { NotFoundComponent } from './../not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'detail/:id', component:ProductDetailsComponent},
    { path: '**', component: NotFoundComponent },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

//export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

