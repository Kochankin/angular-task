import { NgModule } from '@angular/core';

import { ProductDetailsComponent }  from './product-details.component';
import { ProductDetailsRouting } from './product-details.routing';
import { AppModule } from '../app/app.module';


@NgModule({
  imports: [ProductDetailsRouting, AppModule],
  declarations: [ProductDetailsComponent]
})
export class ProductDetailsModule {}