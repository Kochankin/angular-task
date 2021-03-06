import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { ProductTypesService } from '../service/product-types.service';

@Component({
  selector: 'app-checkbox-panel',
  templateUrl: './checkbox-panel.component.html',
  styleUrls: ['./checkbox-panel.component.css']
})
export class CheckboxPanelComponent implements OnInit {
  productTypes: string[];
  products: object;
  isChecked: object;

  constructor(
    private productsService: ProductsService,
    private productTypesService: ProductTypesService) { }

  ngOnInit():void {
    this.productTypes = this.productTypesService.getOriginalProductTypes();
    this.products = this.productsService.getOriginalProducts();
    this.isChecked = this.productTypesService.getIsChecked();
    //this.products = this.productsService.getProducts();
    //this.productTypes = this.productTypesService.getProductTypes();
  }

  updateCheckbox(productType, isChecked):string{
    if (isChecked[productType]){
      return "checked";
    }
  }

  filterTypes(productType, isChecked):void {
    isChecked[productType] = !isChecked[productType];
    this.productTypesService.filterTypes(productType);
  }

  showAllTypes(isChecked): void{
    for (let type in isChecked) { 
      isChecked[type] = true;
    }
    this.productTypesService.showAllTypes();
  }
}
