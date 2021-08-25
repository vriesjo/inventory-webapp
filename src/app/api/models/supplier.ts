/* tslint:disable */
/* eslint-disable */
import {Reservation} from "./reservation";

export interface Supplier {
  id?: number;
  name?: string;
  description?: string;
  email?: string;
  address?: string;
  phone?: string;
}

export class SupplierImpl implements Supplier {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public email?: string,
    public address?: string,
    public phone?: string,
  ) {}


}
