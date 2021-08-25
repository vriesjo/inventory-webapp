import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ProductResourceService} from "../../api/services/product-resource.service";
import {Product} from "../../api/models";
import {ProductImpl} from "../../api/models/product";
import {SupplierResourceService} from "../../api/services/supplier-resource.service";
import {CategoryResourceService} from "../../api/services/category-resource.service";
import {SupplierImpl} from "../../api/models/supplier";
import {CategoryImpl} from "../../api/models/category";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  editForm = this.fb.group({
    id: [null],
    code: [null],
    name: [null],
    description: [null],
    unit: [null,],
    price: [null],
    quantity: [null],
    status: [null],
    supplier: [null,],
    category: [null,],
  });

  isCreateMode: boolean = true;
  isSaving: boolean = false;
  isError: boolean = false;
  isSaved: boolean = false;

  errorKey?: String;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private productResourceService: ProductResourceService,
              private supplierResourceService: SupplierResourceService,
              private categoryResourceService: CategoryResourceService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') as any;
      if (id != undefined) {
        this.isCreateMode = false
        this.productResourceService.getProduct({"id": id}).subscribe(res => {
          this.updateForm(res)
        })
      }
    });
  }

  updateForm(product: Product): void {

    this.editForm.patchValue({
      id: product.id,
      code: product.code,
      name: product.name,
      description: product.description,
      unit: product.unit,
      price: product.price,
      quantity: product.quantity,
      status: product.status,
      supplier: product.supplier,
      category: product.category,
    });
  }

  save(): void {
    this.isSaving = true
    const product = this.createFromForm()
    if (this.isCreateMode) {
      this.createProduct(product);
    } else {
      this.updateProduct(product);
    }
    this.isSaving = false
  }

  protected createFromForm(): Product {
    let supplierImpl = new SupplierImpl(this.editForm.get(['supplier'])!.value, "", "", "", "", "");
    let categoryImpl = new CategoryImpl(this.editForm.get(['category'])!.value, "", "");


    return {
      ...new ProductImpl(),
      id: this.editForm.get(['id'])!.value,
      code: this.editForm.get(['code'])!.value,
      name: this.editForm.get(['name'])!.value,
      description: this.editForm.get(['description'])!.value,
      unit: this.editForm.get(['unit'])!.value,
      price: this.editForm.get(['price'])!.value,
      quantity: this.editForm.get(['quantity'])!.value,
      status: this.editForm.get(['status'])!.value,
      supplier: supplierImpl,
      category: categoryImpl,
    };
  }

  createProduct(product: Product) {
    this.productResourceService.createProduct({"body": product}).subscribe(
      res => {
        this.updateForm(res)
        this.isError = false
        this.isSaved = true
      },
      err => {
        this.isError = true
        this.isSaved = false
        this.errorKey = err.error.errorKey || err.error.error
      }
    )
  }

  updateProduct(product: Product) {
    this.productResourceService.updateProduct({"id": product.id as any, "body": product}).subscribe(
      res => {
        this.updateForm(res)
        this.isError = false
        this.isSaved = true
      },
      err => {
        this.isError = true
        this.isSaved = false
        this.errorKey = err.error.errorKey || err.error.error
      }
    )
  }
}
