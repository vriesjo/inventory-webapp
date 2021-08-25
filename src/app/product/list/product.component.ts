import { Component, OnInit } from '@angular/core';
import {ProductResourceService} from "../../api/services/product-resource.service";
import {Product} from "../../api/models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products?: Product[];

  constructor(private productResourceService: ProductResourceService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productResourceService.getAllProducts().subscribe(res => {
      console.log("products......" + res);
      this.products = res ?? [];
    })
  }

}
