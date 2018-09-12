import { Component, OnInit, Input } from '@angular/core';
//import { Product } from './../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  products: any[];

  @Input() product;

  constructor(private productsService: ProductsService) { 
  }
  ngOnInit() {
  }

}
