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

  getTypes(){
    return this.productTypes;
  }

  filterTypes(productType){ 
    let i = this.productTypes.indexOf(productType);
    if (i >= 0) {
      this.productTypes.splice(i, 1);
    } else { 
      this.productTypes.unshift(productType); // add it
      // this.productTypes = ProductTypes.slice(0).filter((type) => {
      //  return this.productTypes.includes(type);
      // });    
    }
  }

  showAllTypes(){
    this.productTypes = ProductTypes.slice(0);
  }

  filterProducts(products, type){
    return products.filter(function(product){
      return product['type'] === type;
    });
  }

  getProducts():Product[] {
    return Products;
  }

  sortProducts(sortParam){
    let products = this.getProducts();
      if (sortParam === 'PRICE'){
        this.sortByPrice(products);
      } else {
        this.sortByAlphabet(products);
      }
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
