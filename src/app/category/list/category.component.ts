import {Component, OnInit} from '@angular/core';
import {Category} from "../../api/models/category";
import {CategoryResourceService} from "../../api/services/category-resource.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories?: Category[];

  constructor(private categoryResourceService: CategoryResourceService) {
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(): void {
    this.categoryResourceService.getAllCategories().subscribe(res => {
      this.categories = res ?? [];
    })
  }

}
