import { Component, OnInit, Input } from '@angular/core';
import { ProductTypes } from './../productTypes';
import { Products } from './../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-checkbox-panel',
  templateUrl: './checkbox-panel.component.html',
  styleUrls: ['./checkbox-panel.component.css']
})
export class CheckboxPanelComponent implements OnInit {
  productTypes = ProductTypes.slice(0);
  products = Products;
  
  constructor(private productsService: ProductsService) { }

  filterTypes(productType) {
    this.productsService.filterTypes(productType);
  }

  showAllTypes(){
    this.productsService.showAllTypes();
  }

  ngOnInit() {
  }
}
