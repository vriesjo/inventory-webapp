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

import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getReservation
   */
  static readonly GetReservationPath = '/api/reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReservation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservation$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Reservation>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationResourceService.GetReservationPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Reservation>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getReservation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservation(params: {
    id: number;
  }): Observable<Reservation> {

    return this.getReservation$Response(params).pipe(
      map((r: StrictHttpResponse<Reservation>) => r.body as Reservation)
    );
  }

  /**
   * Path part for operation updateReservation
   */
  static readonly UpdateReservationPath = '/api/reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservation$Response(params: {
    id: number;
    body: Reservation
  }): Observable<StrictHttpResponse<Reservation>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationResourceService.UpdateReservationPath, 'put');
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
        return r as StrictHttpResponse<Reservation>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservations(params: {
    id: number;
    body: Reservation
  }): Observable<Reservation> {

    return this.updateReservation$Response(params).pipe(
      map((r: StrictHttpResponse<Reservation>) => r.body as Reservation)
    );
  }

  /**
   * Path part for operation deleteReservation
   */
  static readonly DeleteReservationPath = '/api/reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReservation()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReservation$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationResourceService.DeleteReservationPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteReservation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReservation(params: {
    id: number;
  }): Observable<void> {

    return this.deleteReservation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation partialUpdateReservation
   */
  static readonly PartialUpdateReservationPath = '/api/reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partialUpdateReservation()` instead.
   *
   * This method sends `application/merge-patch+json` and handles request body of type `application/merge-patch+json`.
   */
  partialUpdateReservation$Response(params: {
    id: number;
    body: Reservation
  }): Observable<StrictHttpResponse<Reservation>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationResourceService.PartialUpdateReservationPath, 'patch');
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
        return r as StrictHttpResponse<Reservation>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `partialUpdateReservation$Response()` instead.
   *
   * This method sends `application/merge-patch+json` and handles request body of type `application/merge-patch+json`.
   */
  partialUpdateReservation(params: {
    id: number;
    body: Reservation
  }): Observable<Reservation> {

    return this.partialUpdateReservation$Response(params).pipe(
      map((r: StrictHttpResponse<Reservation>) => r.body as Reservation)
    );
  }

  /**
   * Path part for operation getAllReservations
   */
  static readonly GetAllReservationsPath = '/api/reservations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllReservations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllReservations$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Reservation>>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationResourceService.GetAllReservationsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Reservation>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllReservations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllReservations(params?: {
  }): Observable<Array<Reservation>> {

    return this.getAllReservations$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Reservation>>) =>
        r.body as Array<Reservation>)
    );
  }

  /**
   * Path part for operation createReservation
   */
  static readonly CreateReservationPath = '/api/reservations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReservation$Response(params: {
    body: Reservation
  }): Observable<StrictHttpResponse<Reservation>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationResourceService.CreateReservationPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Reservation>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReservation(params: {
    body: Reservation
  }): Observable<Reservation> {

    return this.createReservation$Response(params).pipe(
      map((r: StrictHttpResponse<Reservation>) => r.body as Reservation)
    );
  }

}
