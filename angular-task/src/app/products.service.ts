import { Injectable } from '@angular/core';
import { Product } from './product';
import { Products } from './products';
import { ProductTypes } from './productTypes';
//import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getTypes(){
    return ProductTypes;
  }

  showType(productType){
   let products = this.getProducts();
   return this.filterTypes(products, productType);
  }

  filterTypes(products, type){
    return products.filter(function(product){
      return product['type'] === type;
    });
  }

  getProducts():Product[] {
    return Products;
  }

  sortByPrice(products): Product[] {
    return products.sort(function(a, b){
      return a['price'] - b['price'];
    })
  }

  sortByAlphabet(products): Product[] {
    return products.sort(function(a, b){
      return a['name'] > b['name'];
    })
  }

}
