import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from "./category/list/category.component";
import {ProductComponent} from "./product/list/product.component";
import {ProductDetailComponent} from "./product/detail/product-detail.component";
import {ProductUpdateComponent} from "./product/update/product-update.component";
import {SupplierComponent} from "./supplier/list/supplier.component";
import {ReservationComponent} from "./reservation/list/reservation.component";
import {ReservationUpdateComponent} from "./reservation/update/reservation-update.component";
import {CategoryDetailComponent} from "./category/detail/category-detail.component";
import {CategoryUpdateComponent} from "./category/update/category-update.component";
import {SupplierDetailComponent} from "./supplier/detail/supplier-detail.component";
import {SupplierUpdateComponent} from "./supplier/update/supplier-update.component";

const routes: Routes = [
  {
    path: 'reservation-list',
    component: ReservationComponent,
  },
  {
    path: 'category-list',
    component: CategoryComponent,
  },
  {
    path: 'supplier-list',
    component: SupplierComponent,
  },
  {
    path: 'product-list',
    component: ProductComponent
  },
  {
    path: 'product/:id/view',
    component: ProductDetailComponent
  },
  {
    path: 'product/:id/edit',
    component: ProductUpdateComponent,
  },
  {
    path: 'product/new',
    component: ProductUpdateComponent,
  },
  {
    path: 'category/:id/edit',
    component: CategoryUpdateComponent,
  },
  {
    path: 'category/:id/view',
    component: CategoryDetailComponent
  },
  {
    path: 'category/new',
    component: CategoryUpdateComponent,
  },
  {
    path: 'supplier/:id/view',
    component: SupplierDetailComponent
  },
  {
    path: 'supplier/:id/edit',
    component: SupplierUpdateComponent
  },
  {
    path: 'supplier/new',
    component: SupplierUpdateComponent,
  },
  {
    path: 'reservation/new',
    component: ReservationUpdateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
