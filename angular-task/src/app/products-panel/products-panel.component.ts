import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css']
})
export class ProductsPanelComponent implements OnInit {
  products: Product[];
  types: string[];
  @Input() type;

  constructor(private productsService: ProductsService) { 
  }

  getProducts() {
    return this.productsService.getProducts();
  }

  getPanelProducts(): void{
    let panelProducts = this.getProducts();
    this.products = this.productsService.filterTypes(panelProducts, this.type);
  }

  ngOnInit() {
    this.getPanelProducts();
  }

}
