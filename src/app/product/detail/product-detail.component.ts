import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {ProductResourceService} from "../../api/services/product-resource.service";
import {Product} from "../../api/models/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;

  constructor(private _Activatedroute:ActivatedRoute,
              private _router:Router,
              private productResourceService: ProductResourceService) { }


  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      const id = params.get('id') as any;
      this.productResourceService.getProduct({"id": id}).subscribe(res => {
        this.product = res ?? [];
      })
    });
  }

}
