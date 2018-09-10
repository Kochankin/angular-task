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
    ProductTypes.slice(0).forEach((el) => {
      if(!this.productTypes.includes(el)){
        this.productTypes.push(el);
      } 
    });
  }

  getPanelProducts(type){
    return this.products[type];
  }

  sortProducts(sortParam){
      if (sortParam === 'price'){
        this.sortByPrice(this.products);
      } else {
        this.sortByAlphabet(this.products);  
      }  
    }
  
  sortByPrice(products) {
    const types = Object.keys(products);
    types.forEach((type) => {
      products[type].sort(function(a, b){
        return a['price'] - b['price'];
      });
    })
  }

  sortByAlphabet(products) {
    const types = Object.keys(products);
    types.forEach((type) => {
      products[type].sort(function(a, b){
        return a['name'] > b['name'];
      });
    })
  }

}
