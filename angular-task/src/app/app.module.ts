import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
//import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { CheckboxPanelComponent } from './checkbox-panel/checkbox-panel.component';
import { ProductsComponent } from './products/products.component';
import { ProductsPanelComponent } from './products-panel/products-panel.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CheckboxPanelComponent,
    ProductsComponent,
    ProductsPanelComponent,
    ProductPreviewComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    //NgbCarousel,
    //NgbCarouselConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
