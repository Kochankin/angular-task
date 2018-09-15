import { Component, OnInit, Input } from '@angular/core';
import { VisibleProductsNum } from './../const/visibleProductsNum';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css']
})
export class ProductsPanelComponent implements OnInit {
  repeatItemsNum:number = 1;
  items = [this.repeatItemsNum];
  products:object[];
  types: string[];
  shownProductsNum:number = VisibleProductsNum;
  totalProductsNum:number;
  @Input() type;
  @Input() index;

  constructor(private productsService: ProductsService) { }

  ngOnInit():void {
    this.getPanelProducts();
 }
  
  getPanelProducts():void{ 
    this.products = this.productsService.getPanelProducts(this.type);
    this.totalProductsNum = this.products.length;
  }

  setClass(i):string{
    return (i % 2 !== 0) ? "odd" : "even"; 
  }

  decreaseShownProductsNum():void{
    if (this.shownProductsNum !== VisibleProductsNum){
      this.shownProductsNum--;
    }
  }

  increaseShownProductsNum():void{
    if (this.shownProductsNum !== this.totalProductsNum){
      this.shownProductsNum++;
    }
  }
}
