import { Injectable } from '@angular/core';
import { Product } from './product';
import { Products } from './products';
import { ProductTypes } from './productTypes';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  productTypes = ProductTypes.slice(0);
  products = Products;

  getTypes() {
    return this.productTypes;
  }

  filterTypes(productType){ 
    let i = this.productTypes.indexOf(productType);
    if (i >= 0) { //remove
      this.productTypes.splice(i, 1);
    } else { // add
      this.productTypes.push(productType); 
      let filtered = ProductTypes.slice(0).filter(type => this.productTypes.includes(type));    
      this.productTypes.splice(0, this.productTypes.length, ...filtered);
    }
  }

  showAllTypes(){
    this.productTypes.splice(0, this.productTypes.length, ...ProductTypes);
  }

  getPanelProducts(type) {
    return this.products[type];
  }

  sortProducts(sortParam) {
    const types = Object.keys(this.products);
    types.forEach((type) => {
      this.products[type].sort((a, b) => a[sortParam] > b[sortParam]);
    });
  }
}
