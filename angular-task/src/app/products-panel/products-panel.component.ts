import { Component, OnInit, Input } from '@angular/core';
//import { Product } from './../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css']
})
export class ProductsPanelComponent implements OnInit {
  items: Array<any> = []
  products:object[];
  types: string[];
  @Input() type;

  constructor(private productsService: ProductsService) { 
  }
  
  getPanelProducts(): void{ 
    this.products = this.productsService.getPanelProducts(this.type);
  }

  ngOnInit() {
     this.getPanelProducts();
     this.items = [1];
  }

}
