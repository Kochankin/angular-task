import { Injectable } from '@angular/core';
import { Products } from '../const/products';

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor() { }
  products = Products;

  getProducts():object{
    return this.products;
  }

  getOriginalProducts():object{
    const originalProducts = Object.assign({}, Products);
    return originalProducts;
  }

  getPanelProducts(type):object[] {
    return this.products[type];
  }

  sortProducts(sortParam):void {
    for (let type in this.products){
      this.products[type].sort((a, b) => a[sortParam] > b[sortParam]);
    }
  }
}
