import { Component, OnInit, Input } from '@angular/core';
import { ProductsTemplate } from './../const/productsTemplate';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  products: ProductsTemplate;
  @Input() product;

  constructor() { }
  ngOnInit() {}
}
