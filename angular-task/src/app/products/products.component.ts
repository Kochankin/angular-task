import { Component, OnInit} from '@angular/core';
import { ProductsTemplate } from './../const/productsTemplate';
import { SortParams } from './../const/sortParams';
import { ProductsService } from '../service/products.service';
import { ProductTypesService } from '../service/product-types.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  sortParams = SortParams;
  productTypes: string[];
  products;
  product: object;
  types: string[];
  selected;

  constructor(
    private productsService: ProductsService, 
    private productTypesService: ProductTypesService) { }

  ngOnInit():void {
    this.getTypes();
    this.productTypes = this.productTypesService.getOriginalProductTypes();
    this.selected = this.productsService.getSelected();
  }

  getTypes(): void{
    this.types = this.productTypesService.getProductTypes();
  }

  sortProducts(sortParam):void{
    this.productsService.sortProducts(sortParam);
    this.selected.sortParam = sortParam;
  }

  onSelect(sortParam){
    return (sortParam === this.selected)? 'true' : 'false';
  }
}
