import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductDetailsComponent } from './product-details.component';

export const routes: Routes = [
  { path: '', component: ProductDetailsComponent }
];

//export const ProductDetailsRouting: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductDetailsRouting { }