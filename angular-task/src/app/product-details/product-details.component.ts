import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {
   product;
   products;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute, 
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct(); 
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.products = this.productsService.getProducts();
    let prods = this.products['men'].concat(this.products['women']).concat(this.products['children']);
    this.product = prods.find(product => product.id === id);
  }

  goBack(): void {
    this.location.back();
  }
}