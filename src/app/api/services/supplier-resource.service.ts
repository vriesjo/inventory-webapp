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

import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root',
})
export class SupplierResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSupplier
   */
  static readonly GetSupplierPath = '/api/suppliers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSupplier()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupplier$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Supplier>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.GetSupplierPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Supplier>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSupplier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupplier(params: {
    id: number;
  }): Observable<Supplier> {

    return this.getSupplier$Response(params).pipe(
      map((r: StrictHttpResponse<Supplier>) => r.body as Supplier)
    );
  }

  /**
   * Path part for operation updateSupplier
   */
  static readonly UpdateSupplierPath = '/api/suppliers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSupplier$Response(params: {
    id: number;
    body: Supplier
  }): Observable<StrictHttpResponse<Supplier>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.UpdateSupplierPath, 'put');
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
        return r as StrictHttpResponse<Supplier>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateSupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSupplier(params: {
    id: number;
    body: Supplier
  }): Observable<Supplier> {

    return this.updateSupplier$Response(params).pipe(
      map((r: StrictHttpResponse<Supplier>) => r.body as Supplier)
    );
  }

  /**
   * Path part for operation deleteSupplier
   */
  static readonly DeleteSupplierPath = '/api/suppliers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSupplier()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSupplier$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.DeleteSupplierPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteSupplier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSupplier(params: {
    id: number;
  }): Observable<void> {

    return this.deleteSupplier$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation partialUpdateSupplier
   */
  static readonly PartialUpdateSupplierPath = '/api/suppliers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partialUpdateSupplier()` instead.
   *
   * This method sends `application/merge-patch+json` and handles request body of type `application/merge-patch+json`.
   */
  partialUpdateSupplier$Response(params: {
    id: number;
    body: Supplier
  }): Observable<StrictHttpResponse<Supplier>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.PartialUpdateSupplierPath, 'patch');
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
        return r as StrictHttpResponse<Supplier>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `partialUpdateSupplier$Response()` instead.
   *
   * This method sends `application/merge-patch+json` and handles request body of type `application/merge-patch+json`.
   */
  partialUpdateSupplier(params: {
    id: number;
    body: Supplier
  }): Observable<Supplier> {

    return this.partialUpdateSupplier$Response(params).pipe(
      map((r: StrictHttpResponse<Supplier>) => r.body as Supplier)
    );
  }

  /**
   * Path part for operation getAllSuppliers
   */
  static readonly GetAllSuppliersPath = '/api/suppliers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllSuppliers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSuppliers$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Supplier>>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.GetAllSuppliersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Supplier>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllSuppliers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSuppliers(params?: {
  }): Observable<Array<Supplier>> {

    return this.getAllSuppliers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Supplier>>) => r.body as Array<Supplier>)
    );
  }

  /**
   * Path part for operation createSupplier
   */
  static readonly CreateSupplierPath = '/api/suppliers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSupplier$Response(params: {
    body: Supplier
  }): Observable<StrictHttpResponse<Supplier>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.CreateSupplierPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Supplier>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createSupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSupplier(params: {
    body: Supplier
  }): Observable<Supplier> {

    return this.createSupplier$Response(params).pipe(
      map((r: StrictHttpResponse<Supplier>) => r.body as Supplier)
    );
  }

}
