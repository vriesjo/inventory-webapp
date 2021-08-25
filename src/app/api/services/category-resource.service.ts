/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCategory
   */
  static readonly GetCategoryPath = '/api/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategory$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryResourceService.GetCategoryPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategory(params: {
    id: number;
  }): Observable<Category> {

    return this.getCategory$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

  /**
   * Path part for operation updateCategory
   */
  static readonly UpdateCategoryPath = '/api/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory$Response(params: {
    id: number;
    body: Category
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryResourceService.UpdateCategoryPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory(params: {
    id: number;
    body: Category
  }): Observable<Category> {

    return this.updateCategory$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

  /**
   * Path part for operation deleteCategory
   */
  static readonly DeleteCategoryPath = '/api/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryResourceService.DeleteCategoryPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory(params: {
    id: number;
  }): Observable<void> {

    return this.deleteCategory$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation partialUpdateCategory
   */
  static readonly PartialUpdateCategoryPath = '/api/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partialUpdateCategory()` instead.
   *
   * This method sends `application/merge-patch+json` and handles request body of type `application/merge-patch+json`.
   */
  partialUpdateCategory$Response(params: {
    id: number;
    body: Category
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryResourceService.PartialUpdateCategoryPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/merge-patch+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `partialUpdateCategory$Response()` instead.
   *
   * This method sends `application/merge-patch+json` and handles request body of type `application/merge-patch+json`.
   */
  partialUpdateCategory(params: {
    id: number;
    body: Category
  }): Observable<Category> {

    return this.partialUpdateCategory$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

  /**
   * Path part for operation getAllCategories
   */
  static readonly GetAllCategoriesPath = '/api/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Category>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryResourceService.GetAllCategoriesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Category>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories(params?: {
  }): Observable<Array<Category>> {

    return this.getAllCategories$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Category>>) =>
        r.body as Array<Category>)
    );
  }

  /**
   * Path part for operation createCategory
   */
  static readonly CreateCategoryPath = '/api/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory$Response(params: {
    body: Category
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryResourceService.CreateCategoryPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory(params: {
    body: Category
  }): Observable<Category> {

    return this.createCategory$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

}
