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

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getProduct
   */
  static readonly GetProductPath = '/api/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProduct$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductResourceService.GetProductPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProduct(params: {
    id: number;
  }): Observable<Product> {

    return this.getProduct$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * Path part for operation updateProduct
   */
  static readonly UpdateProductPath = '/api/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct$Response(params: {
    id: number;
    body: Product
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductResourceService.UpdateProductPath, 'put');
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
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct(params: {
    id: number;
    body: Product
  }): Observable<Product> {

    return this.updateProduct$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * Path part for operation deleteProduct
   */
  static readonly DeleteProductPath = '/api/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductResourceService.DeleteProductPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct(params: {
    id: number;
  }): Observable<void> {

    return this.deleteProduct$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation partialUpdateProduct
   */
  static readonly PartialUpdateProductPath = '/api/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partialUpdateProduct()` instead.
   *
   * This method sends `application/merge-patch+json` and handles request body of type `application/merge-patch+json`.
   */
  partialUpdateProduct$Response(params: {
    id: number;
    body: Product
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductResourceService.PartialUpdateProductPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/merge-patch+json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `partialUpdateProduct$Response()` instead.
   *
   * This method sends `application/merge-patch+json` and handles request body of type `application/merge-patch+json`.
   */
  partialUpdateProduct(params: {
    id: number;
    body: Product
  }): Observable<Product> {

    return this.partialUpdateProduct$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * Path part for operation getAllProducts
   */
  static readonly GetAllProductsPath = '/api/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllProducts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProducts$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Product>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductResourceService.GetAllProductsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Product>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllProducts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProducts(params?: {
  }): Observable<Array<Product>> {

    return this.getAllProducts$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Product>>) => r.body as Array<Product>)
    );
  }

  /**
   * Path part for operation createProduct
   */
  static readonly CreateProductPath = '/api/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct$Response(params: {
    body: Product
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductResourceService.CreateProductPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct(params: {
    body: Product
  }): Observable<Product> {

    return this.createProduct$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

}
