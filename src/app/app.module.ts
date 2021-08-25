import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/list/category.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/list/product.component';
import { ProductDetailComponent } from './product/detail/product-detail.component';
import { ProductUpdateComponent } from './product/update/product-update.component';
import { SupplierComponent } from './supplier/list/supplier.component';
import { ReservationComponent } from './reservation/list/reservation.component';
import { ReservationUpdateComponent } from './reservation/update/reservation-update.component';
import { CategoryDetailComponent } from './category/detail/category-detail.component';
import { CategoryUpdateComponent } from './category/update/category-update.component';
import { SupplierDetailComponent } from './supplier/detail/supplier-detail.component';
import { SupplierUpdateComponent } from './supplier/update/supplier-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    SupplierComponent,
    ReservationComponent,
    ReservationUpdateComponent,
    CategoryDetailComponent,
    CategoryUpdateComponent,
    SupplierDetailComponent,
    SupplierUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
