import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from './../../service/products.service';
import { ProductsTemplate } from './../../const/ProductsTemplate';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {
   product: object;
   products: ProductsTemplate;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute, 
    private location: Location
  ) {}

  ngOnInit(): void {
    this.product = this.getProduct(this.products); 
  }

  getProduct(products) {
    const id = +this.route.snapshot.paramMap.get('id'); 
    products = this.productsService.getProducts();
    for (let type in products){
      let found = products[type].find(product => product.id === id);
      if (found) { return found;}
    }
  }

  goBack(): void {
    this.location.back();
  }
}