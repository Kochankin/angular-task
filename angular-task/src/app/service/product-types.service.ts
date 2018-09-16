import { Injectable } from '@angular/core';
import { ProductTypes } from './../const/productTypes';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductTypesService {
  constructor() { }
  productTypes = ProductTypes.slice(0);
  isChecked = {
    men: true,
    women: true,
    children: true
  };

  getProductTypes():string[] {
    return this.productTypes;
  }

  getIsChecked(){
    return this.isChecked;
  }

  getOriginalProductTypes():string[]{
    return ProductTypes.slice(0);
  }

  filterTypes(productType):void{ 
    let i = this.productTypes.indexOf(productType);
    if (i >= 0) { //remove type
      this.productTypes.splice(i, 1); 
    } else { // return type to the same place
      this.productTypes.push(productType); 
      let filtered = ProductTypes.slice(0).filter(type => this.productTypes.includes(type));    
      this.productTypes.splice(0, this.productTypes.length, ...filtered);
    }
  }

  showAllTypes():void{
    this.productTypes.splice(0, this.productTypes.length, ...ProductTypes);
  }
}
