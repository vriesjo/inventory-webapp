import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SupplierResourceService} from "../../api/services/supplier-resource.service";
import {Supplier} from "../../api/models/supplier";

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit {

  supplier?: Supplier;

  constructor(private _Activatedroute: ActivatedRoute,
              private _router: Router,
              private supplierResourceService: SupplierResourceService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      const id = params.get('id') as any;
      this.supplierResourceService.getSupplier({"id": id}).subscribe(res => {
        this.supplier = res ?? [];
      })
    });
  }

}
