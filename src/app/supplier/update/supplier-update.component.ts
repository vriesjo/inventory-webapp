import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {SupplierResourceService} from "../../api/services/supplier-resource.service";
import {Supplier, SupplierImpl} from "../../api/models/supplier";

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.css']
})
export class SupplierUpdateComponent implements OnInit {

  editForm = this.fb.group({
    id: [null],
    name: [null],
    description: [null],
    address: [null],
    email: [null],
    phone: [null],
  });

  isCreateMode: boolean = true;
  isSaving: boolean = false;
  isError: boolean = false;
  isSaved: boolean = false;

  errorKey?: String;

  constructor(protected route: ActivatedRoute,
              protected fb: FormBuilder,
              protected supplierResourceService: SupplierResourceService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = params.get('id') as any;
      if (id != undefined) {
        this.isCreateMode = false
        this.supplierResourceService.getSupplier({"id": id}).subscribe(res => {
          this.updateForm(res)
        })
      }
    });
  }

  updateForm(supplier: Supplier): void {
    this.editForm.patchValue({
      id: supplier.id,
      name: supplier.name,
      description: supplier.description,
      address: supplier.address,
      email: supplier.email,
      phone: supplier.phone,
    });
  }

  save(): void {
    this.isSaving = true
    const supplier = this.createFromForm()
    if (this.isCreateMode) {
      this.createSupplier(supplier);
    } else {
      this.updateSupplier(supplier);
    }
    this.isSaving = false
  }

  protected createFromForm(): Supplier {
    return {
      ...new SupplierImpl(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      description: this.editForm.get(['description'])!.value,
      address: this.editForm.get(['address'])!.value,
      phone: this.editForm.get(['phone'])!.value,
      email: this.editForm.get(['email'])!.value,
    };
  }

  createSupplier(supplier: Supplier) {
    this.supplierResourceService.createSupplier({"body": supplier}).subscribe(
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

  updateSupplier(supplier: Supplier) {
    this.supplierResourceService.updateSupplier({"id": supplier.id as any, "body": supplier}).subscribe(
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
