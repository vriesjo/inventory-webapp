import {Component, OnInit} from '@angular/core';
import {Supplier} from "../../api/models";
import {SupplierResourceService} from "../../api/services/supplier-resource.service";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  suppliers?: Supplier[];

  constructor(private supplierResourceService: SupplierResourceService) {
  }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.supplierResourceService.getAllSuppliers().subscribe(res => {
      this.suppliers = res ?? [];
    })
  }
}
