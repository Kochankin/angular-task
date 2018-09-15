import { Component, OnInit, Input } from '@angular/core';
//import { Product } from './../product';
import { ProductsService } from '../products.service';

const visibleProductsNum = 3;

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css']
})
export class ProductsPanelComponent implements OnInit {
  items: Array<any> = []
  products:object[];
  types: string[];
  shownProductsNum:number = visibleProductsNum;
  totalProductsAmount:number;
  @Input() type;
  @Input() index;

  constructor(private productsService: ProductsService) { 
  }
  
  getPanelProducts(): void{ 
    this.products = this.productsService.getPanelProducts(this.type);
    this.totalProductsAmount = this.products.length;
  }

  ngOnInit() {
     this.getPanelProducts();
     this.items = [1];
  }

  setClass(i){
    if (i % 2 !== 0) {
      return "odd";
    } else {
      return "even";
    }
  }

  decreaseShownProductsNum(){
    if (this.shownProductsNum !== visibleProductsNum){
      this.shownProductsNum--;
    }
  }

  increaseShownProductsNum(){
    if (this.shownProductsNum !== this.totalProductsAmount){
      this.shownProductsNum++;
    }
  }

}
