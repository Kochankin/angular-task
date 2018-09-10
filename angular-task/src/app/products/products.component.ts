import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgModel} from '@angular/forms';
import { ProductTypes } from './../productTypes';
import { Product } from './../product';
import { ProductsService } from '../products.service';

const SortParams: string[] = ['price', 'alphabet'];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  sortParams = SortParams;
  productTypes = ProductTypes;
  products: Product[];
  product: Product;
  types: string[];

  constructor(private productsService: ProductsService) { 
  }

  getTypes(){
    this.types = this.productsService.getTypes();
  }

  sortProducts(sortParam){
    this.productsService.sortProducts(sortParam);
  }

  ngOnInit() {
    this.getTypes();
  }

}
