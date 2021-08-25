import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {CategoryResourceService} from "../../api/services/category-resource.service";
import {Category} from "../../api/models";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category?: Category;

  constructor(private _Activatedroute: ActivatedRoute,
              private _router: Router,
              private categoryResourceService: CategoryResourceService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      const id = params.get('id') as any;
      this.categoryResourceService.getCategory({"id": id}).subscribe(res => {
        this.category = res ?? [];
      })
    });
  }

}
