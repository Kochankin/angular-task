import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { CheckboxPanelComponent } from './../checkbox-panel/checkbox-panel.component';
import { ProductsComponent } from './../products/products.component';
import { ProductsPanelComponent } from './../products-panel/products-panel.component';
import { ProductPreviewComponent } from './../product-preview/product-preview.component';
import { AppRoutingModule }  from '../routing/app-routing.module';
import { MainComponent } from './../main/main.component';
import { NotFoundComponent } from './../not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxPanelComponent,
    ProductsComponent,
    ProductsPanelComponent,
    ProductPreviewComponent,
    MainComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
