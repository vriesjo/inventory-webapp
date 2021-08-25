import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {CategoryResourceService} from "../../api/services/category-resource.service";
import {Category, CategoryImpl} from "../../api/models/category";

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  editForm = this.fb.group({
    id: [null],
    name: [null],
    description: [],
  });

  isCreateMode: boolean = true;
  isSaving: boolean = false;
  isError: boolean = false;
  isSaved: boolean = false;

  errorKey?: String;

  constructor(protected route: ActivatedRoute,
              protected fb: FormBuilder,
              protected categoryResourceService: CategoryResourceService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') as any;
      if (id != undefined) {
        this.isCreateMode = false
        this.categoryResourceService.getCategory({"id": id}).subscribe(res => {
          this.updateForm(res)
        })
      }
    });
  }

  updateForm(category: Category): void {
    this.editForm.patchValue({
      id: category.id,
      name: category.name,
      description: category.description,
    });
  }

  save(): void {
    this.isSaving = true
    const category = this.createFromForm()
    if (this.isCreateMode) {
      this.createCategory(category);
    } else {
      this.updateCategory(category);
    }
    this.isSaving = false
  }

  protected createFromForm(): Category {
    return {
      ...new CategoryImpl(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      description: this.editForm.get(['description'])!.value,
    };
  }

  createCategory(category: Category) {
    this.categoryResourceService.createCategory({"body": category}).subscribe(
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

  updateCategory(category: Category) {
    this.categoryResourceService.updateCategory({"id": category.id as any, "body": category}).subscribe(
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
