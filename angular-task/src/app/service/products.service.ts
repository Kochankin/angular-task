import { Injectable } from '@angular/core';
import { Products } from '../const/products';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor() { }
  products = Products;
  selected = {sortParam: 'id'};

  getProducts():object{
    return this.products;
  }

  getSelected():object{
    return this.selected;
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
